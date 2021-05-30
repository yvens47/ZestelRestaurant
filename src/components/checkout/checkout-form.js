import React, { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import axios from "axios";
import { Redirect } from "react-router-dom";

// import useResponsiveFontSize from "../../useResponsiveFontSize";

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    axios
      .post("https://rbvjz.sse.codesandbox.io/stripe", {
        product: {},
        amount: props.cart.taxes.PA * props.cart.total + props.cart.total
      })
      .then((response) => {
        console.log(response);
        setClientSecret(response.data.clientSecret);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, []);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement)
      }
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      // EMPTY CART
      //redirect to checkout success
      // update  user puchase history in db

      setRedirect(true);
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      props.resetCart();
    }
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: "/checkout-success",
          state: { orderid: "2456", items: props.cart.items }
        }}
      />
    );
  }
  return (
    <form id="payment-form " className="mb-5" onSubmit={handleSubmit}>
      <fieldset className="mb-3 checkout-name border p-3">
        <legend className-="col-md-3 col-form-label pt-0 w-auto px-2">
          Personal Info
        </legend>
        <div className="form-row">
          <div className="col">
            <label for="inputEmail4">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col">
            <label for="inputEmail4">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="mb-3 checkout-name border p-3">
        <legend className-="col-md-3 col-form-label pt-0 w-auto px-2">
          Address
        </legend>
        <div className="form-row">
          <div className="col">
            <label for="inputEmail4">Street</label>
            <input
              type="text"
              className="form-control"
              placeholder="Street"
              name="street"
            />
          </div>
          <div className="col">
            <label for="inputEmail4">Address 2</label>
            <input
              type="text"
              className="form-control"
              placeholder="apt#, suite"
              name="address2"
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="mb-2 checkout-name border p-3">
        <legend className-="col-md-3 col-form-label pt-0 w-auto px-2">
          Payment Details
        </legend>
        <div className="form-row">
          <div className="col">
            <label for="inputEmail4">Card Number</label>
            <CardNumberElement
              id="card-element"
              options={{}}
              onChange={handleChange}
              className=" mt-2 form-control mb-2"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label for="inputEmail4">Expires</label>
            <CardExpiryElement
              id="card-element"
              options={{}}
              onChange={handleChange}
              className=" mt-2 form-control mb-2"
            />
          </div>
          <div className="col">
            <label for="inputEmail4">CVV</label>
            <CardCvcElement
              id="card-element"
              options={{}}
              onChange={handleChange}
              className=" mt-2 form-control mb-2"
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="mb-2 checkout-name border p-3 d-flex justify-content-end">
        <legend className="col-md-3 col-form-label pt-0 w-auto px-2">
          Amounts
        </legend>
        <div className=" d-flex  flex-column justify-content-end ">
          <p className="subtotal  d-flex justify-content-end">
            <span className="d-block  p-2  flex-grow-1  font-weight-bold">
              {" "}
              Subtotal
            </span>
            <span className="d-block  p-2 text-right  flex-grow-1">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
              }).format(props.cart.total)}
            </span>
          </p>
          <p className="tax d-flex justify-content-end flex-grow-1">
            <span className="d-block  p-2 font-weight-bold"> Tax</span>
            <span className="d-block  p-2 flex-grow-1 text-right">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
              }).format(props.cart.taxes.PA)}
            </span>
          </p>
          <p className="total d-flex justify-content-end flex-grow-1">
            <span className="d-block  p-2 font-weight-bold"> Total</span>
            <span className="d-block  p-2 flex-grow-1 text-right">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
              }).format(
                props.cart.taxes.PA * props.cart.total + props.cart.total
              )}
            </span>
          </p>
        </div>
      </fieldset>

      <button
        disabled={processing || disabled || succeeded}
        id="submit"
        className="btn btn-primary"
      >
        <span id="button-text">
          {processing ? (
            <>
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      {/* <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a href={`https://dashboard.stripe.com/test/payments`}>
          {" "}
          Stripe dashboard.
        </a>{" "}
        Refresh the page to pay again.
      </p> */}
    </form>
  );
};

export default CheckoutForm;

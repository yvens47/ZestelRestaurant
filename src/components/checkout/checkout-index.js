import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import "./checkout.css";

import Navbar from "../common/navbar";
import {
  removeFromCart,
  updateQty,
  resetCart
} from "../../store/actions/cartActions";
import { Link, Route } from "react-router-dom";

import CheckoutForm from "./checkout-form";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51H3831HWpLQtVGqf7Z6tUHV0Gmm75IjNCWmbelzrIcCdnjJJorzNpiUazvsxqFGIIHY07Np3I70oK2DDdjaXHeWx00ShGU8FNf"
);

function CheckoutIndexPage(props) {
  const [guest, setGuest] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const handleChange = ({ currentTarget }) => {
    const guestCopy = { ...guest };
    guestCopy[currentTarget.name] = currentTarget.value;
    setGuest(guestCopy);
    console.log(currentTarget);
  };
  return (
    <Fragment>
      <Navbar />
      <div className="order">
        <div className="container">
          <div className="row pt-5 justify-content-center">
            <div className="order-checkout pt-5 col-md-8">
              <div className=" pt-5 mt-5">
                <Route exact path={`/checkout`}>
                  {props.user ? (
                    <Fragment>
                      <h1 className="display-3 text-center">
                        {" "}
                        User SECURE CHECKOUT
                      </h1>
                      <hr />

                      {/* <CheckoutForm guest={guest} handle={handleChange} /> */}
                      <Elements stripe={stripePromise}>
                        <CheckoutForm
                          cart={props.cart}
                          Submit={() => alert("form Submited")}
                          resetCart={props.resetCart}
                        />
                      </Elements>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <div className="noitem-image">
                        <i className="fas fa-shopping-basket fa-9x"></i>
                      </div>
                      <div className="noitem-image">
                        <h1 className="display-3">Checkout</h1>
                        <p>Don't have an account?</p>
                        <p>
                          <Link
                            to="/checkout/guest"
                            className="btn btn-outline-info btn-large pl-5 pr-5 "
                          >
                            Proceed as Guest
                          </Link>
                        </p>
                      </div>
                    </Fragment>
                  )}
                </Route>
                <Route path={`/checkout/:guest`}>
                  <h1 className="display-3 text-center pb-5">
                    Guest SECURE Checkout
                  </h1>
                  <Elements stripe={stripePromise} resetCart={props.resetCart}>
                    <CheckoutForm
                      cart={props.cart}
                      resetCart={props.resetCart}
                    />
                  </Elements>
                </Route>

                {!props.user && (
                  <Fragment>
                    <hr />
                    <div
                      style={{
                        width: "35%",
                        display: "block",
                        margin: "0 auto"
                      }}
                    >
                      <Link
                        to={{
                          pathname: "/login",

                          state: { referrer: "/checkout" }
                        }}
                        className="btn btn-secondary btn-large pl-5 pr-5 btn-block"
                      >
                        Login
                      </Link>
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    cart: state.cart,
    user: state.user
  };
};

export default connect(mapStateToProps, {
  removeFromCart,
  updateQty,
  resetCart
})(CheckoutIndexPage);

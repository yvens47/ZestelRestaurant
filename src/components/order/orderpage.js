import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import firebase from "../../utils/firebase/firebase";

import Cart from "../Cart/cart";
import "./order.css";
import IconButton from "@material-ui/core/IconButton";
import Navbar from "../common/navbar";
import { removeFromCart, updateQty } from "../../store/actions/cartActions";
import currencyFormatter from "currency-formatter";
import { loginUser, isLogin } from "../../store/actions/userActions";
import { Redirect } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function OrderPage(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        const u = {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          isAnonymous: user.isAnonymous,
          tenantId: user.tenantId,
          providerData: user.providerData,

          lastLoginAt: user.lastLoginAt,
          createdAt: user.createdAt
        };
        console.log(u);
        props.isLogin(u);

        // setUser(u);
      } else {
        // No user is signed in.
      }
    });
  }, []);

  const handleRemoveItem = (e, product) => {
    e.preventDefault();
    props.removeFromCart(product);
  };

  const updateQty = (e, item) => {
    const itemCopy = { ...item };
    itemCopy.quantity = itemCopy.quantity + 1;
    // forward update redux

    props.updateQty(itemCopy);
  };
  const updateQtyDown = (e, item) => {
    const itemCopy = { ...item };
    itemCopy.quantity = itemCopy.quantity - 1;
    // forward update redux
    props.updateQty(itemCopy);
    // update local storage and DB and db also used
  };
  const checkout = () => {
    props.history.push("/checkout");
  };
  // if (!props.user) {
  //   return <Redirect to="/menu" />;
  // }

  return (
    <Fragment>
      <Navbar />
      <div className="order">
        <div className="container">
          <div className="row pt-5 justify-content-center">
            {props.cart.itemCount === 0 ? (
              <div className="order-details-no pt-5 col-md-8">
                <div className=" pt-5 mt-5">
                  {/* image  */}
                  <div className="noitem-image">
                    <i className="fas fa-shopping-bag fa-9x"></i>
                    {/* <ShoppingBasketIcon /> */}
                  </div>
                  <div className="noitem-description">
                    <h1 className="display-3">Your Bag is empty</h1>

                    <p className="lead">
                      elementum dictum dolor at, imperdiet blandit metus.
                      Phasellus eget hendrerit est. Cras placerat bibendum
                      imperdiet. Fusce rhoncus vehicula euismod
                    </p>
                    <a
                      href="/menu"
                      className="btn btn-secondary btn-large border-0 rounded-0"
                    >
                      <i class="fab fa-opencart"></i>
                      Order{" "}
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <Fragment>
                {" "}
                <div className="col-md-8 pt-5">
                  <h1 className="display-3">
                    {" "}
                    My Order({props.cart.itemCount})
                  </h1>
                </div>
                <div
                  style={{
                    overflowY: props.cart.itemCount > 2 ? "scroll" : "none",
                    minHeight: props.cart.itemCount > 2 ? "400px" : "auto",
                    maxHeight: props.cart.itemCount > 2 ? "400px" : "auto"
                  }}
                  className="order-details pt-2 col-md-8"
                >
                  <Cart
                    updateQty={updateQty}
                    items={props.cart.items}
                    removeFromCart={handleRemoveItem}
                    updateQtyDown={updateQtyDown}
                  />
                </div>
              </Fragment>
            )}
          </div>

          {props.cart.itemCount != 0 && (
            <div className="row pt-1 cart-summary justify-content-center">
              <div className="order-details-action pt-1 col-md-8  ">
                <div className="price-summary d-flex border p-3 justify-content-between">
                  <div className="price-summary d-flex ">
                    <p className="font-weight-bold">Subtotal</p>
                  </div>
                  <div className="price-summary-dollar d-flex">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD"
                    }).format(props.cart.total)}
                  </div>
                </div>
                <div className="price-summary tax mt-1 d-flex border p-3 justify-content-between">
                  <div className="price-summary d-flex ">
                    <p className="font-weight-bold">Tax</p>
                  </div>
                  <div className="price-summary-dollar d-flex">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD"
                    }).format(props.cart.taxes.PA * props.cart.total)}
                  </div>
                </div>

                <div className="price-summary mt-1 d-flex border p-3 justify-content-between">
                  <div className="price-summary d-flex ">
                    <p className="font-weight-bold">Total</p>
                  </div>
                  <div className="price-summary-dollar d-flex">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD"
                    }).format(
                      props.cart.taxes.PA * props.cart.total + props.cart.total
                    )}
                  </div>
                </div>

                <div className="order-details-action pt-1 mt-2 border-top">
                  <button
                    onClick={checkout}
                    className="btn btn-info btn-large  "
                  >
                    Check out
                  </button>
                </div>
              </div>
            </div>
          )}
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

export default connect(mapStateToProps, { removeFromCart, updateQty, isLogin })(
  OrderPage
);

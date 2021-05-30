import React, { Fragment } from "react";
import { connect } from "react-redux";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import CartItem from "./cartItem";
function Cart(props) {
  return (
    <Fragment>
      {/* <Navbar /> */}

      <div className="cart-wrapper">
        {props.items.map((item) => (
          <div className="cart d-flex border mb-3  justify-content-between align-items-center rounded">
            <CartItem
              key={item}
              item={item}
              removeItem={props.removeFromCart}
              updateQty={props.updateQty}
              updateQtyDown={props.updateQtyDown}
            />
          </div>
        ))}
      </div>

      {/* <Footer /> */}
    </Fragment>
  );
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    // cart: state.cart
  };
};

export default connect(mapStateToProps)(Cart);

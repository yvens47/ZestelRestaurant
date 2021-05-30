import React from "react";
import { withRouter, Link } from "react-router-dom";

function CheckoutSuccess(props) {
  return (
    <div className="success">
      <p className="result-message">
        Payment succeeded, see the result in your
        <Link
          to={{
            pathname: `/tracker`,
            state: { data: props.location.state }
          }}
        >
          {" "}
          Tracker your Order
        </Link>{" "}
        Refresh the page to pay again.
      </p>
    </div>
  );
}
export default withRouter(CheckoutSuccess);

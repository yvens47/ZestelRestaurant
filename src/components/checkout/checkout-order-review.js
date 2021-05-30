import React, { Fragment, useState, useMemo } from "react";
import { connect } from "react-redux";

import "./checkout.css";
import Navbar from "../common/navbar";

import { removeFromCart, updateQty } from "../../store/actions/cartActions";
import { Link, Route, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./checkout-form";
const stripePromise = loadStripe(
  "pk_test_51H3831HWpLQtVGqf7Z6tUHV0Gmm75IjNCWmbelzrIcCdnjJJorzNpiUazvsxqFGIIHY07Np3I70oK2DDdjaXHeWx00ShGU8FNf"
);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

function CheckoutOrderReviewPage(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <Navbar />
      <div className="order">
        <div className="container">
          <div className="row pt-5 justify-content-center">
            <div className="order-checkout pt-5 col-md-7">
              <div className=" pt-5 mt-5">
                <h1 classname="display-3">Order Review</h1>
                <div className={classes.root}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        Order Summary
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                </div>
                <div className="complete-wrapper-total d-flex justify-content-end  align-items-end">
                  <div className="totals">
                    <div className="line-total">Subtotal : $9.78</div>
                    <div className="line-total">Tax : $2.45</div>
                    <div className="line-total">Total : $12.45</div>
                  </div>
                </div>

                <hr />
                {/* <div className="complete-wrapper">
                  <button className="btn btn-secondary" onClick={completeOrder}>
                    Complete Order
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-md-5"></div>
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

export default connect(mapStateToProps, { removeFromCart, updateQty })(
  withRouter(CheckoutOrderReviewPage)
);

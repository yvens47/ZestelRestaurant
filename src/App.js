import "./styles.css";
import React, { Fragment, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import TrackerIndex from "./components/Tracker/tracker";
import IndexPage from "./components/Homepage/mainpage";
import ProductsIndexPage from "./components/products/ProductsIndexPage";

import MenuIndexPage from "./components/menu/menu-index";
import ProductDetailPage from "./components/products/productsdetailpage";

import Login from "./components/login/login";
import Register from "./components/login/register";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";
import OrderPage from "./components/order/orderpage";
import OrderManagementIndex from "./components/orderManagement/Oorder-management";
import CheckoutIndexPage from "./components/checkout/checkout-index";
import firebase from "./utils/firebase/firebase";
import { isLogin } from "./store/actions/userActions";
import checkoutOrderReview from "./components/checkout/checkout-order-review";
import CheckoutSuccess from "./components/checkout/checkout-success";
import Dashboard from "./components/dashboard/dashboard";

export default function App() {
  return (
    <Fragment>
      <div className="wrapper">
        {/* <Navbar user={user} /> */}
        <Switch>
          <Route path="/tracker">
            <TrackerIndex />
          </Route>
          <Route exact path="/food">
            <ProductsIndexPage />
          </Route>
          <Route path="/food/:productId">
            <ProductDetailPage />
          </Route>

          <Route path="/menu">
            <MenuIndexPage />
          </Route>
          <Route path="/order" component={OrderPage} />
          <Route path="/checkout" component={CheckoutIndexPage} />
          <Route path="/checkout-review" component={checkoutOrderReview} />
          <Route path="/checkout-success">
            <CheckoutSuccess />
          </Route>

          <Route path="/order-management">
            <OrderManagementIndex />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <IndexPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Fragment>
  );
}

import React, { Fragment, useState } from "react";
import Navbar from "../common/navbar";
import {
  Link,
  Route,
  withRouter,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";
import {
  loginUser,
  isLogin,
  loginWithGoogle
} from "../../store/actions/userActions";
import { connect } from "react-redux";
import AccountSettingsForm from "./account-settings-form";
import "./dashboard.css";
import { Doughnut, Bar, Pie } from "react-chartjs-2";
import PurchaseHistory from "./purchase-history";
import Modal from "./modal";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Purchases ",
      data: [116, 89, 33, 55, 24, 78],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ],
      borderWidth: 1
    }
  ]
};

const options = {
  indexAxis: "x",
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom"
    },
    title: {
      display: true,
      text: "Monthly Purchases"
    }
  }
};

function Section(props) {
  let { tabId } = useParams();
  const { address, setAddress } = useState([]);

  return (
    <div>
      {tabId === "history" && (
        <div>
          <PurchaseHistory History={props.History} />
        </div>
      )}
      {tabId === "settings" && (
        <div>
          <h1 className="display-4">Settings</h1>
          <p className="lead">
            Suspendisse tortor orci, commodo ut metus id, tristique dignissim
            mauris. Phasellus mattis nec nibh vel volutpat. Suspendisse
            efficitur ultrices dolor.
          </p>
          <div className="addresses border mb-3 mt-3">
            {[].length == 0 && (
              <div className="p-5">
                {JSON.stringify(address)}
                <h1 className="display-4">Address</h1>
                <p className="lead">
                  Suspendisse tortor orci, commodo ut metus id, tristique
                  dignissim mauris. Phasellus mattis
                </p>
                <p>
                  <button
                    className="btn btn-info p-2"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    Add an Address
                  </button>
                </p>
              </div>
            )}
          </div>

          <AccountSettingsForm />
          <Modal title="Add address" content="your tent" />
        </div>
      )}
    </div>
  );
}

function Dashboard(props) {
  let { path, url } = useRouteMatch();
  const [tabValue, setTabValue] = useState(0);
  if (!props.user) {
    return (
      <Redirect
        to={props.location.state ? props.location.state.referrer : "/"}
      />
    );
  }
  return (
    <Fragment>
      <Navbar />

      <div className="dashboard container-fluid">
        <div className="container-fluid">
          <div className="row mt-5 pt-5 justify-content-center">
            <div className="col-md-8">
              {/* <h1>My Dash Board... display Purchase History</h1> */}
              <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                  <Link
                    onClick={() => setTabValue(0)}
                    className={
                      "nav-link" + `${tabValue === 0 ? " active" : ""}`
                    }
                    aria-current="page"
                    to={`${url}`}
                  >
                    <i class="fas fa-cog mr-1 d-block m-0 fa-2x"></i>
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    onClick={() => setTabValue(1)}
                    className={
                      "nav-link" + `${tabValue === 1 ? " active" : ""}`
                    }
                    aria-current="page"
                    to={`${url}/settings`}
                  >
                    <i class="fas fa-cog mr-1 d-block m-0 fa-2x"></i>
                    Settings
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={`${url}/history`}
                    onClick={() => setTabValue(2)}
                    className={
                      "nav-link" + `${tabValue === 2 ? " active" : ""}`
                    }
                  >
                    <i class="fas fa-history mr-1 d-block m-0 fa-2x"></i>History
                  </Link>
                </li>
              </ul>

              <div className="content pt-5 pl-3 border-top">
                <Route exact path={`/dashboard`}>
                  <h1>DashBoard</h1>

                  <div className="row border-top mt-5 pt-3 mb-4">
                    <div className=" col-12 col-md-6">
                      <h1 className="display-4">Your Monthly Purchase</h1>
                      <p className="lead">
                        Suspendisse tortor orci, commodo ut metus id, tristique
                        dignissim mauris. Phasellus mattis nec nibh vel
                        volutpat. Suspendisse efficitur ultrices dolor.
                      </p>
                    </div>
                    <div className=" col-12 col-md-6">
                      <div className="chart border p-4">
                        <Bar data={data} options={options} />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5 border-top pt-3">
                    <div className=" col-12 col-md-5">
                      <div className="chart border p-4">
                        <Pie
                          data={{
                            labels: ["Purchases", "Dicsounts"],
                            title: {
                              display: true,
                              text: "Monthly Purchases"
                            },
                            datasets: [
                              {
                                label: "Lifetime Purchases and Discounts",
                                data: [1234, 345],
                                backgroundColor: [
                                  "rgba(255, 99, 132, 0.2)",
                                  "rgba(54, 162, 235, 0.2)",
                                  "rgba(255, 206, 86, 0.2)",
                                  "rgba(75, 192, 192, 0.2)",
                                  "rgba(153, 102, 255, 0.2)",
                                  "rgba(255, 159, 64, 0.2)"
                                ],
                                borderColor: [
                                  "rgba(255, 99, 132, 1)",
                                  "rgba(54, 162, 235, 1)",
                                  "rgba(255, 206, 86, 1)",
                                  "rgba(75, 192, 192, 1)",
                                  "rgba(153, 102, 255, 1)",
                                  "rgba(255, 159, 64, 1)"
                                ],
                                borderWidth: 1
                                // backgroundColor: Object.values(Utils.CHART_COLORS)
                              }
                            ]
                          }}
                        />
                      </div>
                    </div>

                    <div className=" col-12 col-md-7">
                      <h1 className="display-4">Your Monthly Purchase</h1>
                      <p className="lead">
                        Suspendisse tortor orci, commodo ut metus id, tristique
                        dignissim mauris. Phasellus mattis nec nibh vel
                        volutpat. Suspendisse efficitur ultrices dolor.
                      </p>
                    </div>
                  </div>
                </Route>
                <Route path={`${path}/:tabId`}>
                  <Section History={props.History} />
                </Route>
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
    user: state.user,
    History: state.purchasesHistory
  };
};

export default connect(mapStateToProps, {
  loginUser,
  isLogin,
  loginWithGoogle
})(withRouter(Dashboard));

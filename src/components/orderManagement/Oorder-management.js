import { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ordermanagement.css";
import axios from "axios";
import io from "socket.io-client";
import { Link, withRouter, Route } from "react-router-dom";
import OrdersManagement from "./orders";
import Navbar from "../common/navbar";
const socket = io("https://rbvjz.sse.codesandbox.io/");

//import { subscribeToTimer } from "../../utils/Socket.io";

class OrderManagementIndex extends Component {
  state = {
    stages: ["prep", "cooking", "delivering"],
    orders: [
      {
        _id: "123",
        name: "Salad",
        price: "34.99",
        orderNumber: "126783",
        user: "Jean Pierre",
        userid: "567"
      },
      {
        _id: "133",
        name: "Salad Chicken pop",
        price: "34.99",
        orderNumber: "126783",
        user: "Jean yvens",
        userid: "567"
      }
    ],
    currentStage: 1
  };
  componentDidMount() {
    socket.on("connect", () => console.log("connected to server"));
    socket.emit("join", { room: "helllo" });
    socket.on("Stage", (stage) => this.setState({ stage }));
    axios.get(`https://rbvjz.sse.codesandbox.io/`, (response) => {
      console.log(response);
    });
  }
  // componentDidUpdate = () => {
  //   socket.on("backend", (message) => this.setState({ message }));
  // };
  componentWillUnmount = () => {
    socket.on("Stage", (stage) => this.setState({ stage }));
  };

  handleClick = (e) => {
    e.preventDefault();
    const stage = e.currentTarget.getAttribute("data-stage");
    console.log(stage);
    axios.get(`https://rbvjz.sse.codesandbox.io/prep/${stage}`, (response) => {
      console.log(response);
    });
  };
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container-fluid order-wrapper pt-5">
          <div className="row p-5 ">
            <div className="col-md-9 p-0" style={{ background: "white" }}>
              <h1 className="display-2">Order Management</h1>
              <p className="lead">
                Integer elementum dignissim lacus in tincidunt. Nam egestas
                ipsum turpis, in feugiat libero faucibus eget. Nam at neque vel
                lectus condimentum{" "}
              </p>

              <Route exact path={`/order-management`}>
                <OrdersManagement orders={this.state.orders} />
              </Route>
              <Route path={`/order-management/:itemId`}>
                {"edit this order"}
                <Fragment>
                  <div className="order-management-action">
                    <div className="list-group list-group-horizontal">
                      <a
                        data-stage="1"
                        onClick={this.handleClick}
                        href="/"
                        className="list-group-item list-group-item-action rounded-0 "
                      >
                        Processing your Order
                      </a>
                      <a
                        data-stage="2"
                        onClick={this.handleClick}
                        href="/"
                        className="list-group-item list-group-item-action rounded-0"
                      >
                        Preparing <i class="fas fa-burn text-danger "></i>
                      </a>
                      <a
                        data-stage="3"
                        onClick={this.handleClick}
                        href="/"
                        className="list-group-item list-group-item-action rounded-0"
                      >
                        Delivering <i class="fas fa-car text-success"></i>
                      </a>
                    </div>
                  </div>
                </Fragment>
              </Route>
            </div>

            <div className="col-md-3 pt-5"></div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(OrderManagementIndex);

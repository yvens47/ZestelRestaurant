import { Component, Fragment, useState } from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import { connect } from "react-redux";
import { Link, withRouter, Route } from "react-router-dom";
import Menus from "./menus";
import Cart from "../Cart/cart";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import { removeFromCart, updateQty } from "../../store/actions/cartActions";

//import { subscribeToTimer } from "../../utils/Socket.io";
import MenuProducts from "./menu-products";
import Drawer from "@material-ui/core/Drawer";
import { openDrawer } from "../../store/actions/cartActions";
import { closeDrawer } from "../../store/actions/cartActions";
import { addToCart } from "../../store/actions/cartActions";
class MenuIndexPage extends Component {
  state = {
    menuItemClick: false,
    open: this.props.ui.isDrawerOpen,
    width: 300
  };
  handleRemoveItem = (e, product) => {
    e.preventDefault();
    this.props.removeFromCart(product);
  };
  toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.setState({ open, anchor });
    console.log(this.props.ui.isDrawerOpen);
    this.props.closeDrawer(false);
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
    this.props.closeDrawer(false);
  };
  handleClick = (product) => {
    this.props.addToCart(product);
    this.props.openDrawer(true);
  };
  updateQty = (e, item) => {
    const itemCopy = { ...item };
    itemCopy.quantity = itemCopy.quantity + 1;
    // forward update redux

    this.props.updateQty(itemCopy);
  };
  updateQtyDown = (e, item) => {
    const itemCopy = { ...item };
    itemCopy.quantity = itemCopy.quantity - 1;
    // forward update redux
    this.props.updateQty(itemCopy);
    // update local storage and DB and db also used
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container-fluid">
          <div className="row pt-5 pb-5" style={{ background: "white" }}>
            <div className=" col-12 col-md-3 p-5">
              {/* nproduct passed in props display all Products */}
              <h2 className="display-3">Zestel 's Menu'</h2>
              <p className="lead">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
              <div className="list-group">
                <Menus
                  menus={this.props.menu}
                  clicked={this.state.menuItemClick}
                  // click={this.handleClick}
                />
              </div>
            </div>
            <div className=" col-12 col-md-8 p-5">
              {/* nproduct passed in props display all Products */}
              <Route path={`/menu`}>
                {this.props.location.pathname === "/menu" && (
                  <MenuProducts
                    products={this.props.foods}
                    all="0"
                    click={this.handleClick}
                  />
                )}
              </Route>
              <Route path={`/menu/:menuId`}>
                <MenuProducts
                  products={this.props.foods}
                  click={this.handleClick}
                />
              </Route>
            </div>
          </div>
          <Drawer
            anchor={"right"}
            // classeName={this.state.width}
            classes={{
              root: {
                padding: 20
              },
              paper: {
                width: 250,
                flexShrink: 0,
                padding: 10
              },
              content: {
                flexGrow: 1,
                padding: 10
              }
            }}
            open={this.props.ui.isDrawerOpen}
            onClose={this.toggleDrawer(false)}
          >
            <div className={""}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronRightIcon />
              </IconButton>
            </div>
            {this.props.cart.itemCount == 0 ? (
              <div className="empty container p-5">
                <div className="row justify-content-center">
                  <div className="noitem-image">
                    <i className="fas fa-shopping-bag fa-9x"></i>
                  </div>
                  <div className="noitem-description">
                    <h1 className="display-3">Your Bag is Empty</h1>

                    <p className="lead">
                      elementum dictum dolor at, imperdiet blandit metus.
                      Phasellus eget hendrerit est.
                    </p>
                    <a
                      href="/menu"
                      className="btn btn-secondary btn-large border-0 rounded-0"
                    >
                      {" "}
                      Order{" "}
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className={"p-3"}>
                <Cart
                  updateQty={this.updateQty}
                  updateQtyDown={this.updateQtyDown}
                  items={this.props.cart.items}
                  removeFromCart={this.handleRemoveItem}
                />
              </div>
            )}
          </Drawer>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    foods: state.foods,
    menu: state.menu,
    cart: state.cart,
    ui: state.ui
  };
};

export default connect(mapStateToProps, {
  openDrawer,
  closeDrawer,
  addToCart,
  removeFromCart,
  updateQty
})(withRouter(MenuIndexPage));

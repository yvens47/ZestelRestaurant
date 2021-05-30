import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";

import Badge from "@material-ui/core/Badge";

import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";

import { openDrawer } from "../../store/actions/cartActions";
import { isLogin, signOut } from "../../store/actions/userActions";
// import firebase from "../../utils/firebase/firebase";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      // margin: theme.spacing(0)
    }
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  avatar: {
    margin: "-13px -8px"
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    cart: state.cart.itemCount,
    user: state.user
  };
};

function Navbar(props) {
  const classes = useStyles();
  const signOut = (e) => {
    e.preventDefault();
    props.signOut();
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ background: "#416671" }}
    >
      <Link to="/" className="navbar-brand">
        <i class="fas fa-kiwi-bird fa-3 mr-2"></i>Zestel
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          {/* <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/menu" className="nav-link">
              Menu
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/order" className="nav-link">
              Order <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
        <form className="fform-inline my-2 my-lg-0 ml-auto">
          <input
            className="form-control mr-lg-2 rounded-pill"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            {/* <Link to="/login" className="nav-link">
              Login
            </Link> */}
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => props.openDrawer()}
            >
              <Badge badgeContent={props.cart} color="error">
                <i class="fas fa-shopping-bag"></i>
              </Badge>
            </IconButton>
          </li>
          {props.user && !props.user.code ? (
            <li className="nav-item dropdown ">
              <Link
                className={`nav-link dropdown-toggle ${classes.root}`}
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <IconButton aria-label="delete" className={classes.avatar}>
                  <Avatar src={props.user.photoURL} className={classes.small} />
                </IconButton>
              </Link>
              <div
                className="dropdown-menu dropdown-menu dropdown-menu-md-right  "
                aria-labelledby="navbarDropdown"
              >
                <Link className="dropdown-item" to="/dashboard/history">
                  Purchase History
                </Link>
                <Link className="dropdown-item" to="/dashboard">
                  Dashboard
                </Link>

                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/" onClick={signOut}>
                  Log out
                </Link>
              </div>
            </li>
          ) : (
            <Fragment>
              <li className="nav-item active">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item active">
                <Link to="/Register" className="nav-link">
                  Sign up
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default connect(mapStateToProps, { openDrawer, isLogin, signOut })(
  Navbar
);

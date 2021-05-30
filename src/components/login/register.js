import React, { Fragment, useState, useEffect } from "react";
import "./login.css";
import lighthouse from "../../resources/lighthouse.svg";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect } from "react-redux";
import { signUp, isLogin } from "../../store/actions/userActions";
import firebase from "../../utils/firebase/firebase";

import Navbar from "../common/navbar";
import { Link, Redirect, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: " 0 auto", //theme.spacing(1),
      width: "70%"
    }
  }
}));

function Register(props) {
  const [account, setAccount] = useState({
    email: "",
    password: "",
    name: ""
  });
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

        props.isLogin(u);

        // setUser(u);
      } else {
        // No user is signed in.
      }
    });
  }, []);
  const handleChange = (event) => {
    const accountCopy = { ...account };
    accountCopy[event.target.name] = event.target.value;

    setAccount(accountCopy);
  };
  const register = (e) => {
    e.preventDefault();
    props.signUp(account);
  };

  const classes = useStyles();

  //redirect if User islogged in
  if (props.user) {
    return (
      <Redirect
        to={props.location.state ? props.location.state.referrer : "/"}
      />
    );
  }
  return (
    <Fragment>
      <Navbar />
      <div className="register">
        <div
          className="loginformwrapper-left "
          style={{
            background: `url(${lighthouse})`,
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "90%"
          }}
        ></div>
        <div className="loginformwrapper">
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={register}
          >
            <h3 className="display-3 mb-3 text-center">Sign Up</h3>
            <div class="form-group">
              <div class="form-group pt-2">
                <TextField
                  id="outlined-primary"
                  label="Full Name"
                  variant="outlined"
                  color="primary"
                  type="text"
                  fullWidth={true}
                  name="name"
                  value={account.name}
                  onChange={handleChange}
                />
              </div>
              <TextField
                id="outlined-primary"
                label="Email"
                variant="outlined"
                color="primary"
                fullWidth={true}
                type="email"
                name="email"
                value={account.email}
                onChange={handleChange}
              />
            </div>
            <div class="form-group pt-2">
              <TextField
                id="outlined-primary"
                label="Password"
                variant="outlined"
                color="primary"
                type="password"
                fullWidth={true}
                name="password"
                onChange={handleChange}
                value={account.password}
              />
            </div>
            <div class="form-group pt-2">
              <Button
                onClick={register}
                variant="contained"
                color="primary"
                href="#outlined-buttons"
                size="large"
                fullWidth={true}
              >
                Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, {
  signUp,
  isLogin
})(withRouter(Register));

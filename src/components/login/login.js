import React, { Fragment, useState, useEffect } from "react";
import "./login.css";
import table from "../../resources/restaurant-table.svg";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link, Redirect, withRouter } from "react-router-dom";
import firebase from "../../utils/firebase/firebase";
import {
  loginUser,
  isLogin,
  loginWithGoogle
} from "../../store/actions/userActions";
import { connect } from "react-redux";
import Navbar from "../common/navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: " 0 auto", //theme.spacing(1),
      width: "70%"
    }
  }
}));

function Login(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    checkedB: true
  });
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

  const [account, setAccount] = React.useState({
    email: "",
    password: ""
  });

  const handleChangeCheck = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleChange = (event) => {
    const accountCopy = { ...account };
    accountCopy[event.target.name] = event.target.value;

    setAccount(accountCopy);
  };
  const login = (e) => {
    e.preventDefault();
    props.loginUser(account);
  };
  const loginWithGoogle = (e) => {
    e.preventDefault();
    props.loginWithGoogle();
  };
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
      <div className="login">
        <div
          className="loginformwrapper-left"
          style={{
            background: `url(${table})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "90%"
          }}
        ></div>
        <div className="loginformwrapper">
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={login}
          >
            <p className="text-center loginto lead">
              <i class="fas fa-kiwi-bird fa-5x"></i>
            </p>

            <h3 className="display-3 mb-3 text-center">Zestel</h3>
            {/* <p className="text-center loginto lead"> Login to Zestel</p> */}

            <div class="form-group">
              <TextField
                id="outlined-secondary"
                label="Email"
                variant="outlined"
                color="secondary"
                fullWidth={true}
                type="email"
                name="email"
                value={account.email}
                onChange={handleChange}
              />
            </div>
            <div class="form-group pt-2">
              <TextField
                id="outlined-secondary"
                label="Password"
                variant="outlined"
                color="secondary"
                type="password"
                fullWidth={true}
                name="password"
                value={account.password}
                onChange={handleChange}
              />
            </div>
            {/* <div class="form-group pt-2 d-flex justify-content-between ">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleChangeCheck}
                    name="checkedA"
                  />
                }
                label="Remember Me"
              />
              <Link to="/forgot-password" className="align-self-start pt-2">
                Forgot your password?
              </Link>
            </div> */}
            <div class="form-group pt-2">
              <button
                type="submit"
                className="btn btn-outline-primary btn-block"
              >
                Login
              </button>
            </div>
            <div class="form-group pt-2">
              <Button
                onClick={loginWithGoogle}
                variant="outlined"
                color="secondary"
                href="#outlined-buttons"
                size="large"
                fullWidth={true}
              >
                Login with Google <i className="fab fa-google p-2"></i>
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
  loginUser,
  isLogin,
  loginWithGoogle
})(withRouter(Login));

import firebase from "../../utils/firebase/firebase";
const LOGIN_USER = "LOGIN_USER";
const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

const LOGIN_USER_GOOGLE = "LOGIN_USER_GOOGLE";
const LOGIN_USER_SUCCESS_GOOGLE = "LOGIN_USER_SUCCESS_GOOGLE";
const LOGIN_USER_ERROR_GOOGLE = "LOGIN_USER_ERROR_GOOGLE";

const REGISTER_USER = "REGISTER_USER";
const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
const IS_LOGIN = "IS_LOGIN";
const IS_LOGIN_ERROR = "IS_LOGIN_ERROR";
const IS_LOGIN_SUCCESS = "IS_LOGIN_SUCCESS";

export function loginUser(account) {
  // return {
  //   type: LOGIN_USER
  // };
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(account.email, account.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        user
          .updateProfile({
            displayName: "Jane Q. User",
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
          .then(function () {
            // Update successful.
          })
          .catch(function (error) {
            // An error happened.
          });
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        dispatch({ type: LOGIN_USER_ERROR, payload: error });
      });
  };
}

export function loginWithGoogle() {
  // return {
  //   type: LOGIN_USER
  // };
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_GOOGLE });
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        dispatch({ type: LOGIN_USER_SUCCESS_GOOGLE, payload: user });
        // ...
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        dispatch({ type: LOGIN_USER_ERROR_GOOGLE, payload: error });
        // ...
      });
  };
}

export function signUp(account) {
  // return {
  //   type: LOGIN_USER
  // };
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });
    firebase
      .auth()
      .createUserWithEmailAndPassword(account.email, account.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        user
          .updateProfile({
            displayName: account.name,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
          .then(function () {
            // Update successful.
          })
          .catch(function (error) {
            // An error happened.
            console.log(error);
          });
        dispatch({ type: REGISTER_USER_SUCCESS, payload: user });
        // ...
      })
      .catch((error) => {
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
        dispatch({ type: REGISTER_USER_ERROR, payload: error });
      });
  };
}
export function isLogin(user) {
  return {
    type: IS_LOGIN,
    payload: user
  };
}

export function signOut() {
  return (dispatch) => {
    dispatch({ type: "SIGN_OUT" });
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        dispatch({ type: "SIGN_OUT_SUCCESS", payload: null });
      })
      .catch((error) => {
        // An error happened.
        dispatch({ type: "SIGN_OUT_SUCCESS", payload: error });
      });
  };
}

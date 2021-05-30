import { toast } from "react-toastify";
const LOGIN_USER = "LOGIN_USER";
const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
const IS_LOGIN = "IS_LOGIN";
const IS_LOGIN_ERROR = "IS_LOGIN_ERROR";
const IS_LOGIN_SUCCESS = "IS_LOGIN_SUCCESS";
const REGISTER_USER = "REGISTER_USER";
const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
const LOGIN_USER_GOOGLE = "LOGIN_USER_GOOGLE";
const LOGIN_USER_SUCCESS_GOOGLE = "LOGIN_USER_SUCCESS_GOOGLE";
const LOGIN_USER_ERROR_GOOGLE = "LOGIN_USER_ERROR_GOOGLE";

export function userReducer(state = null, action) {
  const payload = action;
  switch (action.type) {
    case LOGIN_USER:
      return state;

    case LOGIN_USER_SUCCESS:
      return payload.payload;

    case LOGIN_USER_ERROR:
      return payload.payload;

    case LOGIN_USER_GOOGLE:
      return state;

    case LOGIN_USER_SUCCESS_GOOGLE:
      return payload.payload;

    case LOGIN_USER_ERROR_GOOGLE:
      return payload.payload;

    case REGISTER_USER:
      return state;

    case REGISTER_USER_SUCCESS:
      return payload.payload;

    case REGISTER_USER_ERROR:
      return payload.payload;

    case "SIGN_OUT":
      return state;

    case "SIGN_OUT_SUCCESS":
      return payload.payload;

    case "SIGN_OUT_ERROR":
      return payload.payload;

    case IS_LOGIN:
      return payload.payload;

    default:
      return state;
  }
}

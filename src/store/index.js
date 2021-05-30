import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers/rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25
    })) ||
  compose;

const store = createStore(
  rootReducer,
  //  composeWithDevTools(applyMiddleware(reduxThunk))

  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;

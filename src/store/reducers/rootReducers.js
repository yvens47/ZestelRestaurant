import { combineReducers } from "redux";
import { userReducer } from "./userReducers";
import { foodReducer } from "./foodReducers";
import { menuReducer } from "./menuReducers";
import { cartReducer } from "./cartReducers";
import { uiReducer } from "./uiReducers";
import { purchasesHistory } from "./purchaseHistoryReducers";

export default combineReducers({
  user: userReducer,

  foods: foodReducer,
  menu: menuReducer,
  cart: cartReducer,
  ui: uiReducer,
  purchasesHistory: purchasesHistory
});

import { toast } from "react-toastify";
import { indexOfProduct } from "../../utils/cart.utils.js";

import { getCartTotal } from "../../utils/cart.utils.js";
const ADD_TO_CART = "ADD_TOCART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const VIEW_PRODUCTS_FROM_CART = "VIEW_PRODUCTS_FROM_CART";
const GET_TOTALS_CART = "GET_TOTALS_CART";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const GET_CART = "GET_CART";
const RESET_CART = "RESET_CART";

const cart = {
  itemCount: 0,
  total: 0,
  taxes: {
    PA: 0.06
  },
  items: []
};
export function cartReducer(state = cart, action) {
  const payload = action;
  switch (action.type) {
    case GET_CART:
      const localStorage = window.localStorage;
      const cState = { ...state };
      if (localStorage.getItem("items")) {
        //push the items to redux store
        cState.items = JSON.parse(localStorage.getItem("items"));
        cState.itemCount = cState.items.length;
        getCartTotal(cState);
      }

      return cState;
    case RESET_CART:
      const reset = { ...state, items: [] };
      window.localStorage.setItem("items", JSON.stringify(reset.items));
      return state;

    case "ADD_TOCART":
      // copy state
      const copyState = { ...state };
      const product = { ...payload.food };
      let position = indexOfProduct(product, copyState.items);

      if (position === null) {
        //addItem(product, copyState);
        if (!product.quantity) {
          copyState.itemCount += 1;
          //copyState.items.push(payload.food);
          product.quantity = 1;
          copyState.items.push(product);
          const localStorage = window.localStorage;
          // localStorage.getItem("items");
          localStorage.setItem("items", JSON.stringify(copyState.items));
          //return copyState;
        }
      } else {
        copyState.items[position].quantity += 1;
      }

      getCartTotal(copyState);

      return copyState;

    case REMOVE_FROM_CART:
      const cloneState = { ...state };

      const removed = cloneState.items.filter(
        (item) => item._id !== payload.food._id
      );

      cloneState.items = removed;
      getCartTotal(cloneState);
      window.localStorage.setItem("items", JSON.stringify(cloneState.items));
      cloneState.itemCount -= 1;
      return cloneState;

    case UPDATE_QUANTITY:
      const clonedQuantity = { ...state };

      if (parseInt(payload.food.quantity) >= 1) {
        clonedQuantity.items.forEach(function (item) {
          if (item._id === payload.food._id) {
            item.quantity = payload.food.quantity;
          }
        });
      }

      window.localStorage.setItem(
        "items",
        JSON.stringify(clonedQuantity.items)
      );
      getCartTotal(clonedQuantity);

      return clonedQuantity;

    default:
      return state;
  }
}

const ADD_TOCART = "ADD_TOCART";
const REMOVE_TOFROMCART = "REMOVE_TOFROMCART";
const LOAD_ARTICLE = "LOAD_ARTICLE";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const VIEW_PRODUCTS_FROM_CART = "VIEW_PRODUCTS_FROM_CART";
const GET_TOTALS_CART = "GET_TOTALS_CART";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const GET_CART = "GET_CART";
const RESET_CART = "RESET_CART";

// ui
const OPEN_DRAWER = "OPEN_DRAWER";

const CLOSE_DRAWER = "CLOSE_DRAWER";

export function resetCart(food) {
  return {
    type: RESET_CART,
    food
  };
}

export function addToCart(food) {
  return {
    type: ADD_TOCART,
    food
  };
}
export function removeFromCart(food) {
  return {
    type: REMOVE_FROM_CART,
    food
  };
}
export function getCart() {
  return {
    type: GET_CART
  };
}
export function getCartTotals(food) {
  return {
    type: GET_TOTALS_CART
  };
}
export function updateQty(food) {
  return {
    type: UPDATE_QUANTITY,
    food
  };
}

// Ui functions--- to be moved to another file
export function openDrawer() {
  return {
    type: OPEN_DRAWER,
    payload: true
  };
}
export function closeDrawer(payload) {
  return {
    type: CLOSE_DRAWER,
    payload: payload
  };
}

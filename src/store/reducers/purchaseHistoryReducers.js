import { toast } from "react-toastify";

const initilState = [
  // {
  //   name: "food name ",
  //   price: 29.99,
  //   image:
  //     "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  // }
];
export function purchasesHistory(state = initilState, action) {
  const payload = action;
  switch (action.type) {
    default:
      return state;
  }
}

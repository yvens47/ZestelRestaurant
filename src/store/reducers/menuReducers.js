import { toast } from "react-toastify";

const menus = [
  { _id: 0, type: "All", icon: "fas fa-bars" },
  { _id: 1, type: "Burger", icon: " fas fa-hamburger" },
  { _id: 2, type: "Salad", icon: " fas fa-leaf" },
  { _id: 3, type: "Juices", icon: "fas fa-blender-phone" }
];
export function menuReducer(state = menus, action) {
  const payload = action;
  switch (action.type) {
    default:
      return state;
  }
}

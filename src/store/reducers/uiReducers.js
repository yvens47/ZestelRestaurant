import { toast } from "react-toastify";

const initilState = {
  isDrawerOpen: false
};
export function uiReducer(state = initilState, action) {
  const payload = action;
  switch (action.type) {
    case "OPEN_DRAWER":
      const draw = { ...state, isDrawerOpen: true };
      return draw;
    case "CLOSE_DRAWER":
      const closedraw = { ...state, isDrawerOpen: false };
      return closedraw;
    default:
      return state;
  }
}

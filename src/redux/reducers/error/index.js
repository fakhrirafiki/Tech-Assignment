import { SET_ERROR } from "constants/initialType";

export default function error(state = "", action) {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    default:
      return state;
  }
}

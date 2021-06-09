import { TOGGLE_SIDEBAR } from "../../../constants/initialType";

export default function Auth(state = false, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state;
    default:
      return state;
  }
}

import { SET_USER } from "../../../constants/initialType";

export default function Auth(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload };
    default:
      return state;
  }
}

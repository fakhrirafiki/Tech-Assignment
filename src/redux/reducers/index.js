import { combineReducers } from "redux";
import auth from "./Auth.js";
import isSidebarActive from "./isSidebarActive";

export default combineReducers({
  auth,
  isSidebarActive,
});

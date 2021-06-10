import { combineReducers } from "redux";
import auth from "./Auth.js";
import error from "./error";
import isSidebarActive from "./isSidebarActive";

export default combineReducers({
  auth,
  isSidebarActive,
  error,
});

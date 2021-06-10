import axios from "axios";
import store from "redux/store";
import { SET_ERROR } from "constants/initialType";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_AUTH_URL}`,
  // headers: {
  //   Authorization: `${process.env.REACT_APP_NEWS_API_KEY}`,
  // },
});

instance.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
instance.defaults.headers.common = {
  "X-API-Key": `${process.env.REACT_APP_NEWS_API_KEY}`,
};

instance.interceptors.response.use(
  (response) => response,
  (err) => {
    const errorMsg = "newsapi.org : For Developer Plan, Request can be made by browser via localhost only. Visit https://newsapi.org/pricing";
    console.log(err.message);
    store.dispatch({ type: SET_ERROR, payload: err.message === "Network Error" ? errorMsg : err.message });
    return Promise.reject(err);
  },
);

export default instance;

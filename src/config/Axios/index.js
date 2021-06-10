import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_AUTH_URL}`,
  // headers: {
  //   Authorization: `${process.env.REACT_APP_NEWS_API_KEY}`,
  // },
});

instance.defaults.headers.common = {
  "X-API-Key": `${process.env.REACT_APP_NEWS_API_KEY}`,
};

export default instance;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import Routes from "./config/Routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import fire from "config/firebase";
import { setUser } from "redux/actions";

function App() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          dispatch(setUser(user));
          history.push("/");
        }
        if (!user) dispatch(setUser(null));
      });
    };

    authListener();
    // eslint-disable-next-line
  }, [user]);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default withRouter(App);

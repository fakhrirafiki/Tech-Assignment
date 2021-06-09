import { SET_USER } from "constants/initialType";
import fire from "config/firebase";

export const logInWithEmailPassword = (email, password) => {
  fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      return res.user;
    })
    .catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          console.log(err.message);
          return err.message;
        default:
          return err.message;
      }
    });
};

export const signUpWithEmailPassword = (email, password) => {
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      return res.user;
    })
    .catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          console.log(err.message);
          return err.message;
        default:
          return err.message;
      }
    });
};

export const userLoggedOut = () => {
  fire.auth().signOut();
};

export const setUser = (user) => (dispatch) => {
  dispatch({
    type: SET_USER,
    payload: user,
  });
};

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import fire from "config/firebase";
import "./LoginPage.css";

function LoginPage({ register }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [hasAccount, setHasAccount] = useState(!register);
  const history = useHistory();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleHasAccount = () => {
    setHasAccount(!hasAccount);
  };

  const logInWithEmailPassword = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  const signUpWithEmailPassword = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  const handleSubmit = async () => {
    setErrorMsg("");
    if (hasAccount) logInWithEmailPassword();
    if (!hasAccount) signUpWithEmailPassword();
  };

  return (
    <section className="loginPage">
      <div className="loginPage__container">
        <h2 className="loginPage__heading">{hasAccount ? "LOGIN" : "REGISTER"}</h2>
        <p className="loginPage__errorMsg">{errorMsg}</p>
        <div className="loginPage__input">
          <label htmlFor="">Email:</label>
          <input type="email" autoFocus required value={email} onChange={handleChangeEmail} />
        </div>
        <div className="loginPage__input">
          <label htmlFor="">Password:</label>
          <input type="password" required value={password} onChange={handleChangePassword} />
        </div>
        <button className="loginPage__submit" onClick={handleSubmit}>
          {hasAccount ? "LOGIN" : "REGISTER"}
        </button>
        {hasAccount ? (
          <p>
            Don't have account?{" "}
            <span className="loginPage__hasAccount" onClick={handleHasAccount}>
              Signed Up
            </span>
          </p>
        ) : (
          <p>
            Have an account?{" "}
            <span className="loginPage__hasAccount" onClick={handleHasAccount}>
              Log in
            </span>
          </p>
        )}
      </div>
    </section>
  );
}

export default LoginPage;

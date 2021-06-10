import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import NewsList from "components/NewsList";
import HomePageNewsContainer from "components/Containers/HomePageNewsContainer";
import CategoryPage from "pages/PayFazz/category";
import LoginPage from "pages/PayFazz/LoginPage";

function PayFazz() {
  return (
    <>
      <Navbar />
      <div style={{ marginBottom: "auto" }}>
        <Switch>
          <Route path="/login">
            <LoginPage register={false} />
          </Route>
          <Route path="/register">
            <LoginPage register={true} />
          </Route>
          <Route path="/search/:search">
            <CategoryPage />
          </Route>
          <Route path="/categories">
            <NewsList />
          </Route>
          <Route path="/:category">
            <CategoryPage />
          </Route>
          <Route path="/">
            <HomePageNewsContainer />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default PayFazz;

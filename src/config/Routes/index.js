import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PayFazz from "../../pages/PayFazz";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <PayFazz />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

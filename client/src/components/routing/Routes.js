import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import Home from "../layout/Home";
import AboutMe from "../layout/AboutMe";

const Routes = () => {
  return (
    <div className="container container__inside">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutme" component={AboutMe} />
      </Switch>
    </div>
  );
};

export default Routes;

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Navbar from "./components/layout/Navbar";

// styling
import "./App.scss";

//redux
import { Provider } from "react-redux";
import store from "./store";

const App = (props) => {
  return (
    <Provider store={store}>
      <Fragment>
        <div className="container-outside">
          <Router>
            <Navbar />
            <Switch>
              <div className="container-inside">Hello</div>
            </Switch>
          </Router>
        </div>
      </Fragment>
    </Provider>
  );
};

App.propTypes = {};

export default App;

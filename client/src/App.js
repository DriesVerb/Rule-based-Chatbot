import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Routes
import Routes from "./components/routing/Routes";

// components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";

// styling
import "./App.scss";

//redux
import { Provider } from "react-redux";
import store from "./store";

const App = (props) => {
  return (
    <Provider store={store}>
      <Fragment>
        <div className="container container__outside">
          <Router>
            <Navbar />
            <Switch>
              <Routes component={Routes} />
            </Switch>
          </Router>
          <Footer />
        </div>
      </Fragment>
    </Provider>
  );
};

App.propTypes = {};

export default App;

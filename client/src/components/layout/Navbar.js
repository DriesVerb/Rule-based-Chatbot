import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Fragment } from "react";

const Navbar = (props) => {
  return (
    <Fragment>
      <div className="navbar">
        <ul>
          <li>
            <Link className="navbar__link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar__link" to="/aboutme">
              About Me
            </Link>
          </li>
          <li>
            <Link className="navbar__link" to="#!">
              Skills
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

Navbar.propTypes = {};

export default Navbar;

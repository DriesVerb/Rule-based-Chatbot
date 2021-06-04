import React, { Fragment } from "react";

const Footer = (props) => {
  return (
    <Fragment>
      <div className="footer">
        <div className="footer__section"></div>
        <div className="footer__section">Second</div>
        <div className="footer__section--3"></div>
      </div>
    </Fragment>
  );
};

Footer.propTypes = {};

export default Footer;

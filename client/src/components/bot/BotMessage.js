import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// actions
import { userAnswer } from "../../redux/actions/botAction";

const BotMessage = ({ botMessage, index, userAnswer }) => {
  return (
    <Fragment>
      <div
        onClick={(e) => {
          e.preventDefault();
          userAnswer(botMessage.nextQuestion);
        }}
        className="bot__message bot__message--bottom"
      >
        {botMessage.msg}
      </div>
    </Fragment>
  );
};

BotMessage.propTypes = {};

export default connect(null, { userAnswer })(BotMessage);

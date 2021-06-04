import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

// components
import BotMessage from "./BotMessage";

// actions
import {
  botVisible,
  botStart,
  userAnswer,
} from "../../redux/actions/botAction";

const Bot = ({
  botVisible,
  botMessages,
  botVis,
  botStart,
  inputVis,
  topMessage,
  nextQuestion,
  userAnswer,
}) => {
  useEffect(() => {
    botStart();
  }, []);

  const [input, setInput] = useState("");

  const inputField = async () => {
    sessionStorage.setItem("input", input);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ input });
    try {
      await axios.post("/api/bot/", body, config);
    } catch (err) {}
  };

  return (
    <Fragment>
      {botVis ? (
        <div className="bot">
          <div
            onClick={(e) => {
              e.preventDefault();
              botVisible();
            }}
            className="bot__popup"
          >
            X
          </div>

          <div className="bot__message bot__message--top">
            {topMessage && <div>{topMessage}</div>}
          </div>

          {botMessages.length > 0
            ? botMessages.map((msg, index) => {
                return (
                  <div key={index}>
                    <BotMessage key={index} botMessage={msg} index={index} />
                  </div>
                );
              })
            : null}
          {inputVis && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                userAnswer(nextQuestion);
                inputField();
              }}
              className="bot__form"
            >
              <input
                onChange={(e) => {
                  e.preventDefault();
                  setInput(e.target.value);
                }}
                className="bot__input"
                type="text"
                name="input"
              />
              <button className="bot__input--btn" type="submit">
                &#9166;
              </button>
            </form>
          )}
        </div>
      ) : null}
    </Fragment>
  );
};

Bot.propTypes = {
  botVisible: PropTypes.func.isRequired,
  botVis: PropTypes.bool.isRequired,
  inputVis: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  nextQuestion: state.botReducer.nextQuestion,
  topMessage: state.botReducer.topMessage,
  botMessages: state.botReducer.botMessages,
  botVis: state.botReducer.botVis,
  inputVis: state.botReducer.inputVis,
});

export default connect(mapStateToProps, {
  botVisible,
  botStart,
  userAnswer,
})(Bot);

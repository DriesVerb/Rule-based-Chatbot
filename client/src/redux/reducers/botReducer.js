import { BOT_LOAD, BOT_OFF, USER_ANSWER } from "../actions/types";

const initialState = {
  botVis: true,
  topMessage: "Bot is currently offline",
  nextQuestion: null,
  botMessages: [],
  inputVis: false,
};

function botReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case BOT_OFF:
      return {
        ...state,
        botVis: !state.botVis,
      };
    case BOT_LOAD:
    case USER_ANSWER:
      return {
        ...state,
        nextQuestion: payload.nextQuestion,
        topMessage: payload.topMessage,
        botMessages: payload.messages,
        inputVis: payload.input,
      };
    default:
      return state;
  }
}

export default botReducer;

import axios from "axios";
import { BOT_OFF, BOT_LOAD, USER_ANSWER } from "./types";

export const botVisible = () => (dispatch) => {
  dispatch({
    type: BOT_OFF,
  });
};

export const botStart = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/bot");

    dispatch({
      type: BOT_LOAD,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const userAnswer = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/bot/${id}`);

    dispatch({
      type: USER_ANSWER,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.message);
  }
};

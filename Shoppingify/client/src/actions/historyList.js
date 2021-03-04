import {
  GET_HISTORY_SL,
  ADD_HISTORY_SL,
  SET_CURRENT_HISTORY_SL,
  GET_STATS,
  GROUP_BY_MONTH,
} from "../actions/types";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Get shopping list (on load)
export const getHistoryLists = () => async (dispatch) => {
  try {
    const historyLists = await axios.get("api/historyLists");
    dispatch({
      type: GET_HISTORY_SL,
      payload: historyLists.data,
    });
  } catch (err) {
    console.error(err);
  }
};

// Add history list
export const addHistoryList = (list) => async (dispatch) => {
  try {
    const historyList = await axios.post(`api/historyLists`, list, config);

    dispatch({
      type: ADD_HISTORY_SL,
      payload: historyList.data,
    });
  } catch (err) {
    console.error(err);
  }
};

// Set current history list
export const setCurrentHistoryList = (currentList) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CURRENT_HISTORY_SL,
      payload: currentList,
    });
  } catch (err) {
    console.error(err);
  }
};

// Get stats
export const getStats = (lists) => async (dispatch) => {
  try {
    dispatch({
      type: GET_STATS,
      payload: lists,
    });
  } catch (err) {
    console.error(err);
  }
};

// Group by month
export const groupByMonth = (lists) => async (dispatch) => {
  try {
    dispatch({
      type: GROUP_BY_MONTH,
      payload: lists,
    });
  } catch (err) {
    console.error(err);
  }
};

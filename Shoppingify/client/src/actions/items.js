import axios from "axios";
// Import types
import {
  GET_ALL_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  SET_CURRENT_ITEM,
  FILTER_ITEMS,
  CLEAR_FILTER,
} from "../actions/types";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Get all items
export const getAllItems = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/items");

    dispatch({
      type: GET_ALL_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

//   Set current item
export const setCurrentItem = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/items/${id}`);

    dispatch({
      type: SET_CURRENT_ITEM,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

// Add item
export const addItem = (item) => async (dispatch) => {
  try {
    const res = await axios.post("/api/items", item, config);

    dispatch({
      type: ADD_ITEM,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

// Delete item
export const deleteItem = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/items/${id}`);

    dispatch({
      type: DELETE_ITEM,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

// Filter items
export const filterItems = (query) => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_ITEMS,
      payload: query,
    });
  } catch (err) {
    console.error(err);
  }
};

// Clear filter
export const clearFilter = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_FILTER,
    });
  } catch (err) {
    console.error(err);
  }
};

import {
  GET_SL,
  DELETE_SL,
  SAVE_SL,
  ADD_ITEM_SL,
  REMOVE_ITEM_SL,
  ADD_PIECE,
  SUBTRACT_PIECE,
} from "../actions/types";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Get shopping list
export const getShoppingList = () => async (dispatch) => {
  try {
    const shoppingList = await axios.get("api/shoppingList");

    dispatch({
      type: GET_SL,
      payload: shoppingList.data,
    });
  } catch (err) {
    console.error(err);
  }
};

// Delete shopping list
export const deleteShoppingList = (id) => async (dispatch) => {
  try {
    await axios.delete(`api/shoppingList/${id}`);

    dispatch({
      type: DELETE_SL,
    });
  } catch (err) {
    console.error(err);
  }
};

// Edit shopping list
export const saveShoppingList = (id, sl) => async (dispatch) => {
  try {
    const shoppingList = await axios.put(`api/shoppingList/${id}`, sl, config);

    dispatch({
      type: SAVE_SL,
      payload: shoppingList.data,
    });
  } catch (err) {
    console.error(err);
  }
};

// Add item to shopping list
export const addItemToShoppingList = (item) => (dispatch) => {
  try {
    dispatch({
      type: ADD_ITEM_SL,
      payload: item,
    });
  } catch (err) {
    console.error(err);
  }
};

// Remove item from shopping list
export const removeItemFromShoppingList = (item) => (dispatch) => {
  try {
    dispatch({
      type: REMOVE_ITEM_SL,
      payload: item,
    });
  } catch (err) {
    console.error(err);
  }
};

// Add piece
export const addPiece = (item) => (dispatch) => {
  try {
    dispatch({
      type: ADD_PIECE,
      payload: item,
    });
  } catch (err) {
    console.error(err);
  }
};

// Subtract piece
export const subtractPiece = (item) => (dispatch) => {
  try {
    dispatch({
      type: SUBTRACT_PIECE,
      payload: item,
    });
  } catch (err) {
    console.error(err);
  }
};

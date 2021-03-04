// Import types
import {
  GET_SL,
  DELETE_SL,
  SAVE_SL,
  ADD_ITEM_SL,
  REMOVE_ITEM_SL,
  ADD_PIECE,
  SUBTRACT_PIECE,
} from "../actions/types";

// Create initial state
const initialState = {};

export default function modes(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SL:
      return {
        ...payload[0],
      };
    case DELETE_SL:
      return {
        shoppingList: [],
      };
    case SAVE_SL:
      return {
        ...state,
        shoppingList: payload,
      };
    case ADD_ITEM_SL:
      const item = {
        ...payload,
        pieces: 1,
      };

      return {
        ...state,
        items: [...state.items, item],
      };
    case REMOVE_ITEM_SL:
      return {
        ...state,
        items: state.items.filter((item) => item !== payload),
      };
    case ADD_PIECE:
      state.items.map((p) =>
        p === payload ? { ...p, pieces: p.pieces++ } : p
      );
      return {
        ...state,
        items: [...state.items],
      };
    case SUBTRACT_PIECE:
      state.items.map((p) =>
        p === payload ? { ...p, pieces: p.pieces-- } : p
      );

      return {
        ...state,
        items: [...state.items.filter((el) => el.pieces !== 0)],
      };
    default:
      return state;
  }
}

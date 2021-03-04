// Import types
import {
  GET_ALL_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  SET_CURRENT_ITEM,
  FILTER_ITEMS,
  CLEAR_FILTER,
} from "../actions/types";

// Create initial state
const initialState = {
  defaultItems: [],
  currentItem: [],
  filtered: null,
};

export default function modes(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_ITEMS:
      return {
        ...state,
        defaultItems: payload,
      };
    case ADD_ITEM:
      return {
        ...state,
        defaultItems: [...state.defaultItems, payload],
        currentItem: [payload],
      };
    case SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        defaultItems: state.defaultItems.filter(
          (item) => item._id !== payload._id
        ),
        currentItem: null,
      };
    case FILTER_ITEMS:
      return {
        ...state,
        filtered: state.defaultItems.filter((item) => {
          const regex = new RegExp(`${payload}`, "gi");
          return item.name.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
}

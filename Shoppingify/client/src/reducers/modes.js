// Import types
import {
  SET_DEFAULT_MODE,
  SET_ADDITEM_MODE,
  SET_DESC_MODE,
  SET_EDIT_MODE,
  SET_LOADING,
} from "../actions/types";

// Create initial state
const initialState = {
  defaultMode: true,
  addItemMode: false,
  descMode: false,
  editMode: false,
  loading: null,
};

export default function modes(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case SET_DEFAULT_MODE:
      return {
        ...state,
        defaultMode: payload,
      };
    case SET_ADDITEM_MODE:
      return {
        ...state,
        addItemMode: payload,
      };
    case SET_DESC_MODE:
      return {
        ...state,
        descMode: payload,
      };
    case SET_EDIT_MODE:
      return {
        ...state,
        editMode: payload,
      };
    default:
      return state;
  }
}

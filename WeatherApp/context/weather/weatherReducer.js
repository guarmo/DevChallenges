import {
  SET_LOADING,
  SET_COORDS,
  GET_WOEID,
  FETCH_CURRENT,
  SEARCH_PLACE,
  SEARCH_MODE,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_COORDS:
      return {
        ...state,
        coords: action.payload,
      };
    case GET_WOEID:
      return {
        state,
        woeid: action.payload,
      }
    case FETCH_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false
      };
    case SEARCH_PLACE:
      return {
        ...state,
        placeSearched: action.payload,
      };
    case SEARCH_MODE:
      return {
        ...state,
        searchMode: action.payload,
      };
    default:
      return state;
  }
};

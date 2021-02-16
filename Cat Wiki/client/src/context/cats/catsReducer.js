import {
  GET_BREEDS,
  CLEAR_QUERIED,
  GET_QUERIED,
  GET_IMAGE,
  GET_IMAGES,
  GET_SEARCHED,
  SET_LOADING,
} from "../types";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_BREEDS:
      return {
        ...state,
        breeds: payload,
      };
    case GET_QUERIED:
      return {
        ...state,
        queried: payload,
        loading: false,
      };
    case CLEAR_QUERIED:
      return {
        ...state,
        queried: null,
        image: null,
        images: null,
      };
    case GET_IMAGE:
      return {
        ...state,
        image: payload.url,
        loading: false,
      };
    case GET_IMAGES:
      return {
        ...state,
        images: payload,
        loading: false,
      };
    case GET_SEARCHED: {
      return {
        ...state,
        searched: payload,
      };
    }
    default:
      return state;
  }
};

import {
  GET_PHOTOS,
  ADD_PHOTO,
  DELETE_PHOTO,
  SET_SHOW_MODAL,
  SET_HIDE_MODAL,
  FILTER_ITEMS,
  CLEAR_FILTER,
} from "../types";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: payload,
      };
    case ADD_PHOTO:
      return {
        ...state,
        photos: [payload, ...state.photos],
      };
    case DELETE_PHOTO:
      return {
        ...state,
        photos: state.photos.filter((photo) => photo._id !== payload),
        filtered: null,
      };
    case SET_SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case SET_HIDE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    case FILTER_ITEMS:
      return {
        ...state,
        filtered: state.photos.filter((photo) => {
          const regex = new RegExp(`${payload}`, "gi");
          return photo.label.match(regex);
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
};

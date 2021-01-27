import React, { useReducer } from "react";
import PhotoContext from "./photoContext";
import PhotoReducer from "./photoReducer";
import axios from "axios";
import {
  GET_PHOTOS,
  ADD_PHOTO,
  DELETE_PHOTO,
  SET_SHOW_MODAL,
  SET_HIDE_MODAL,
  FILTER_ITEMS,
  CLEAR_FILTER,
} from "../types";

const PhotoState = (props) => {
  const initialState = {
    photos: [],
    filtered: null,
    showModal: false,
  };

  const [state, dispatch] = useReducer(PhotoReducer, initialState);

  // Get photos
  const getPhotos = async () => {
    try {
      const res = await axios.get(`/api/photos`);

      dispatch({ type: GET_PHOTOS, payload: res.data });
    } catch (err) {
      console.error(err);
    }
  };

  // Add photo
  const addPhoto = async (photo) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      console.log(photo);
      const res = await axios.post(`/api/photos`, photo, config);
      console.log(res.data);
      dispatch({ type: ADD_PHOTO, payload: res.data });
    } catch (err) {
      console.error(err);
    }
  };

  // Delete photo
  const deletePhoto = async (id) => {
    try {
      await axios.delete(`/api/photos/${id}`);
      dispatch({ type: DELETE_PHOTO, payload: id });
    } catch (err) {
      console.error(err);
    }
  };

  // Show Modal
  const setShowModal = () => {
    dispatch({ type: SET_SHOW_MODAL });
  };

  // Hide Modal
  const setHideModal = () => {
    dispatch({ type: SET_HIDE_MODAL });
  };

  // Filter items
  const filterItems = async (text) => {
    dispatch({ type: FILTER_ITEMS, payload: text });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <PhotoContext.Provider
      value={{
        photos: state.photos,
        filtered: state.filtered,
        showModal: state.showModal,
        getPhotos,
        addPhoto,
        deletePhoto,
        setShowModal,
        setHideModal,
        filterItems,
        clearFilter,
      }}
    >
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoState;

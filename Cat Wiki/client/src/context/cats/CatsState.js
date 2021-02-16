import React, { useReducer } from "react";
import axios from "axios";
import CatsContext from "./catsContext";
import CatsReducer from "./catsReducer";
import {
  GET_BREEDS,
  CLEAR_QUERIED,
  GET_QUERIED,
  GET_IMAGE,
  GET_IMAGES,
  GET_SEARCHED,
  SET_LOADING,
} from "../types";

const CatsState = (props) => {
  const initialState = {
    breeds: null,
    queried: null,
    error: null,
    loading: false,
    image: null,
    images: null,
    searched: null,
  };

  const [state, dispatch] = useReducer(CatsReducer, initialState);

  // Set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  // Get all breeds
  const getAllBreeds = async () => {
    try {
      const breeds = await axios.get("/api/breeds");
      dispatch({ type: GET_BREEDS, payload: breeds.data });
    } catch (err) {
      dispatch(console.error(err));
    }
  };

  // Clear queried
  const clearQueried = () => {
    dispatch({ type: CLEAR_QUERIED });
  };

  // Get image
  const getImage = async (image_id) => {
    setLoading();
    try {
      const image = await axios.get(`/api/image/${image_id}`);
      dispatch({ type: GET_IMAGE, payload: image.data });
    } catch (err) {
      console.error(err);
    }
  };

  // Get breed (description, temperament, origin, life span, adaptability, affection level, child friendly, grooming, intelligence, health issues, social needs, stranger friendly )
  const getQueried = async (query) => {
    try {
      const breed = await axios.get(`/api/breeds/${query}`);
      dispatch({ type: GET_QUERIED, payload: breed.data });
    } catch (err) {
      console.error(err);
    }
  };

  // Get images
  const getImages = async (id) => {
    setLoading();
    try {
      const images = await axios.get(`/api/images/${id}`);
      dispatch({ type: GET_IMAGES, payload: images.data });
    } catch (err) {
      console.error(err);
    }
  };

  // Add to searched
  const addToSearched = async (queried) => {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      await axios.post(`/api/searched`, queried, headers);
    } catch (err) {
      console.error("error");
    }
  };

  // Get most popular searched cat breeds summary
  const getSearched = async () => {
    // setLoading();
    try {
      const list = await axios.get(`/api/searched/list`);
      dispatch({ type: GET_SEARCHED, payload: list.data });
    } catch (err) {
      console.error("error");
    }
  };

  return (
    <CatsContext.Provider
      value={{
        breeds: state.breeds,
        queried: state.queried,
        error: state.error,
        image: state.image,
        images: state.images,
        searched: state.searched,
        loading: state.loading,
        getQueried,
        getAllBreeds,
        clearQueried,
        getImage,
        getImages,
        addToSearched,
        getSearched,
        setLoading,
      }}
    >
      {props.children}
    </CatsContext.Provider>
  );
};

export default CatsState;

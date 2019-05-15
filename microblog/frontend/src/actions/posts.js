import axios from "axios";

import {
  ADD_COMMENT,
  ADD_POST,
  FETCH_POST,
  REMOVE_COMMENT,
  REMOVE_POST,
  UPDATE_POST,
  VOTE
} from "./types";

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

const getPost = post => {
  return {
    type: FETCH_POST,
    post
  };
};

export const getPostFromAPI = id => {
  return async dispatch => {
    const response = await axios.get(`${API_URL}/${id}`);
    return dispatch(getPost(response.data));
  };
};

const addPost = post => {
  return {
    type: ADD_POST,
    post
  };
};

export const addPostToAPI = (title, body, description) => {
  return async dispatch => {
    const response = await axios.post(`${API_URL}`, {
      title,
      body,
      description
    });
    return dispatch(addPost({ post: response.data }));
  };
};

const removePost = id => {
  return {
    type: REMOVE_POST,
    id
  };
};

export const removePostFromAPI = id => {
  return async dispatch => {
    await axios.delete(`${API_URL}/${id}`);
    return dispatch(removePost(id));
  };
};

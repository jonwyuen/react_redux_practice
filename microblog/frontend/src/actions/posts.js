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

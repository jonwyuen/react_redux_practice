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

export const getPostFromAPI = postId => {
  return async dispatch => {
    const response = await axios.get(`${API_URL}/${postId}`);
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

const removePost = postId => {
  return {
    type: REMOVE_POST,
    postId
  };
};

export const removePostFromAPI = postId => {
  return async dispatch => {
    await axios.delete(`${API_URL}/${postId}`);
    return dispatch(removePost(postId));
  };
};

const updatePost = post => {
  return {
    type: UPDATE_POST,
    post
  };
};

export const updatePostInAPI = (postId, title, body, description) => {
  return async dispatch => {
    const response = await axios.put(`${API_URL}/${postId}`, {
      title,
      body,
      description
    });
    return dispatch(updatePost(response.data));
  };
};

const sendVote = (postId, votes) => {
  return {
    type: VOTE,
    postId,
    votes
  };
};

export const sendVoteToAPI = (postId, direction) => {
  return async dispatch => {
    const response = await axios.post(`${API_URL}/${postId}/vote/${direction}`);
    return dispatch(sendVote(postId, response.data.votes));
  };
};

const addComment = (postId, comment) => {
  return {
    type: ADD_COMMENT,
    postId,
    comment
  };
};

export const addCommentToAPI = (postId, comment) => {
  return async dispatch => {
    const response = await axios.post(`${API_URL}/${postId}/comments`, {
      comment
    });
    return dispatch(addComment(postId, response.data));
  };
};

const removeComment = (postId, commentId) => {
  return {
    type: REMOVE_COMMENT,
    postId,
    commentId
  };
};

export const removeCommentFromAPI = (postId, commentId) => {
  return async dispatch => {
    await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
    return dispatch(removeComment(postId, commentId));
  };
};

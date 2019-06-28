import { FETCH_POSTS } from "./types";
import { FETCH_USER } from "./types";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async dispatch => {
  await dispatch(fetchPosts());
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({
    type: FETCH_POSTS,
    payload: response.data
  });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: FETCH_USER,
    payload: response.data
  });
};

// memoize: can only call action creator one time with each unique user id, can only fetch each user one time inside app
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({
//     type: FETCH_USER,
//     payload: response.data
//   });
// });

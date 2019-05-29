import {
  ADD_COMMENT,
  ADD_POST,
  FETCH_POST,
  REMOVE_COMMENT,
  REMOVE_POST,
  UPDATE_POST,
  VOTE
} from "../actions/types";

const INITIAL_STATE = {};

const postsReducer = (state = INITIAL_STATE, action) => {
  let foundPost = state[action.postId];
  switch (action.type) {
    case FETCH_POST:
      return { ...state, [action.post.id]: action.post };
    case ADD_POST:
      return { ...state, [action.post.id]: { ...action.post, comments: [] } };
    case REMOVE_POST:
      let posts = { ...state };
      delete posts[action.postId];
      return posts;
    case UPDATE_POST:
      return {
        ...state,
        [action.post.id]: {
          ...action.post,
          comments: state[action.post.id].comments
        }
      };
    case ADD_COMMENT:
      return {
        ...state,
        [action.postId]: {
          ...foundPost,
          comments: [...foundPost.comments, action.comment]
        }
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        [action.postId]: {
          ...foundPost,
          comments: foundPost.comments.filter(c => c.id !== action.commentId)
        }
      };
    case VOTE:
      return {
        ...state,
        [action.postId]: { ...foundPost, votes: action.votes }
      };
    default:
      return state;
  }
};

export default postsReducer;

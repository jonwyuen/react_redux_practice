import {
  REMOVE_POST,
  ADD_POST,
  UPDATE_POST,
  VOTE,
  FETCH_TITLES
} from "../actions/types";

const INITIAL_STATE = [];

const sortByVote = posts => {
  return posts.sort((a, b) => b.votes - a.votes);
};

const makeTitleFromPost = ({ id, title, description, votes }) => {
  return { id, title, description, votes };
};

const titlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TITLES:
      return sortByVote([...action.titles]);
    case ADD_POST:
      return [...state, makeTitleFromPost(action.post)];
    case REMOVE_POST:
      return state.filter(title => title.id !== action.postId);
    case UPDATE_POST:
      return state.map(title =>
        title.id === action.postId ? makeTitleFromPost(action.post) : title
      );
    case VOTE:
      return sortByVote(
        state.map(title =>
          title.id === action.postId ? { ...title, votes: action.votes } : title
        )
      );
    default:
      return state;
  }
};

export default titlesReducer;

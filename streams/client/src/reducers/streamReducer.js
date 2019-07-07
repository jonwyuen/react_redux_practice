import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS: {
      // from api => [ { id: 1, title: "stream" }, { id: 2, title: "stream2" } ]
      // state => { 1: { id: 1, title: "stream" }, 2: { id: 2, title: "stream2" } }
      const newState = action.payload.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {});
      return { ...state, ...newState };
    }
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM: {
      const { [action.payload]: omit, ...rest } = state;
      return rest;
    }
    default:
      return state;
  }
};

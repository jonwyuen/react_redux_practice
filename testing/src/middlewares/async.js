/*
react calls action creator -> returns action -> sent to middleware ->
forwards action to reducers -> produces new state
*/

export default ({ dispatch }) => next => action => {
  // check to see if action has promise on payload property
  // if no, send action on to next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  // if yes, wait for it to resolve then make new action and send it through all
  // middlewares again, but with data as payload, not the promise
  action.payload.then(response => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};

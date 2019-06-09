import tv4 from "tv4";
import stateSchema from "middlewares/stateSchema";

export default ({ dispatch, getState }) => next => action => {
  // dont do anything right away, send action to next middleware
  next(action);
  // when thats done, get new updated redux state; then validate structure and type of values in state
  if (!tv4.validate(getState(), stateSchema)) {
    console.warn("Invalid state schema detected!");
  }
};

import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT } from "./actionTypes";

const INITIAL_STATE = {
  cartItems: [],
  cartTotal: 0.0
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return;
    case REMOVE_FROM_CART:
      return;
    case APPLY_DISCOUNT:
      return;
    default:
      return state;
  }
};

export default rootReducer;

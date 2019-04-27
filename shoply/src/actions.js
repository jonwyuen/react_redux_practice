import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT } from "./actionTypes";

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    item
  };
};

export const removeFromCart = item => {
  return {
    type: REMOVE_FROM_CART,
    item
  };
};

export const applyDiscount = discount => {
  return {
    type: APPLY_DISCOUNT,
    discount
  };
};

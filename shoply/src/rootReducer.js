import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT } from "./actionTypes";
import { calcCartTotal } from "./helpers";
import uuid from "uuid/v4";

const INITIAL_STATE = {
  cartItems: [],
  cartTotal: 0.0,
  discountApplied: false,
  discountAmount: 0
};

/* cartItems: [{
  name:
  quantity:
  id:
  price:
}]

*/

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const foundIndex = state.cartItems.findIndex(
        item => item.name === action.item.name
      );
      let newItem = null;
      if (foundIndex === -1) {
        newItem = {
          name: action.item.name,
          id: uuid(),
          price: action.item.price,
          quantity: 1
        };
      } else {
        const foundItem = { ...state.cartItems[foundIndex] };
        foundItem.quantity++;
        state.cartItems[foundIndex] = foundItem;
      }
      const cartItems = newItem
        ? [...state.cartItems, newItem]
        : [...state.cartItems];
      return {
        ...state,
        cartItems,
        cartTotal: calcCartTotal(cartItems, state.discountAmount)
      };
    case REMOVE_FROM_CART:
      return;
    case APPLY_DISCOUNT:
      return;
    default:
      return state;
  }
};

export default rootReducer;

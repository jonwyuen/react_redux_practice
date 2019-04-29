import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT } from "./actionTypes";
import { calcCartTotal } from "./helpers";

const INITIAL_STATE = {
  cartItems: [],
  cartTotal: 0.0,
  discountApplied: false,
  discountAmount: 0
};

const discountTypes = new Map([
  ["REMOVE10", 0.1],
  ["REMOVE20", 0.2],
  ["REMOVE30", 0.3]
]);

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const foundIndex = state.cartItems.findIndex(
        item => item.name === action.item.name
      );
      let newItem = null;
      if (foundIndex === -1) {
        newItem = {
          name: action.item.name,
          id: action.item.id,
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
    }
    case REMOVE_FROM_CART: {
      const foundIndex = state.cartItems.findIndex(
        item => item.name === action.item.name
      );
      // item not in cart
      if (foundIndex === -1) return state;
      // only one of that item in cart
      if (state.cartItems[foundIndex].quantity === 1) {
        const cartItems = state.cartItems.filter(
          (item, idx) => idx !== foundIndex
        );
        return {
          ...state,
          cartItems,
          cartTotal: calcCartTotal(cartItems, state.discountAmount)
        };
        // more than one of that item
      } else if (state.cartItems[foundIndex].quantity > 1) {
        const foundItem = { ...state.cartItems[foundIndex] };
        foundItem.quantity--;
        state.cartItems[foundIndex] = foundItem;
        return {
          ...state,
          cartItems: [...state.cartItems],
          cartTotal: calcCartTotal(state.cartItems, state.discountAmount)
        };
      }
      return state;
    }
    case APPLY_DISCOUNT:
      if (!state.discountApplied && discountTypes.has(action.discount)) {
        const discountAmount = discountTypes.get(action.discount);
        return {
          ...state,
          cartValue: calcCartTotal(state.cartItems, discountAmount),
          discountApplied: true,
          discountAmount
        };
      }
      return state;
    default:
      return state;
  }
};

export default rootReducer;

import * as actions from "./cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  removeCartItem,
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actions.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case actions.ADD_CART_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };
    case actions.REMOVE_ITEM:
      return { ...state, cartItems: removeCartItem(state.cartItems, payload) };
    case actions.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };
    default:
      return state;
  }
};

export default cartReducer;

import * as actions from "./cart.types";

export const toggleCartHidden = () => ({
  type: actions.TOGGLE_CART_HIDDEN,
});

export const addCartItem = (item) => ({
  type: actions.ADD_CART_ITEM,
  payload: item,
});

export const removeCartItem = (cartItem) => ({
  type: actions.REMOVE_ITEM,
  payload: cartItem,
});

export const removeItemFromCart = (cartItem) => ({
  type: actions.REMOVE_CART_ITEM,
  payload: cartItem,
});

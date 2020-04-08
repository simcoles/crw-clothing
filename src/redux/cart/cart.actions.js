import * as actions from "./cart.types";

export const toggleCartHidden = () => ({
  type: actions.TOGGLE_CART_HIDDEN,
});

export const addCartItem = (item) => ({
  type: actions.ADD_CART_ITEM,
  payload: item,
});

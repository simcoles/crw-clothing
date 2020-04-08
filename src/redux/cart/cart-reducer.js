import * as actions from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actions.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
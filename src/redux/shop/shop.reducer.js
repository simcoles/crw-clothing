import * as actions from "./shop.types";

const INITIAL_STATE = {
  collections: [],
};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actions.ADD_SHOP_ITEMS:
      return { ...state, collections: payload };
    default:
      return state;
  }
};

export default shopReducer;

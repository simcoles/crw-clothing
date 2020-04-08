import * as actions from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};
const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actions.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
export default userReducer;

import * as actions from "./user.types";
export const setCurrentUser = (user) => ({
  type: actions.SET_CURRENT_USER,
  payload: user,
});

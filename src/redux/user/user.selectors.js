import { createSelector } from "reselect";
export const userSelector = (state) => state.user;

export const selectCurrentUser = createSelector(
  [userSelector],
  (user) => user.currentUser
);

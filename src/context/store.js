import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import FollowSlice from "./followeSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    followers: FollowSlice,
  },
});

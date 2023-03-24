import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";

/**
 * @description Create our Redux store
 */
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import listReducer from "../features/list/listSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    list: listReducer,
  },
});

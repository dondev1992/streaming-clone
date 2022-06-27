import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import listSlice from "../features/listSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    listSlice: listSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import isAuth from "./slices/isAuthSlice";
import userInfo from "./slices/userInfoSlice";

export const store = configureStore({
  reducer: {
    isAuth,
    userInfo,
  },
});

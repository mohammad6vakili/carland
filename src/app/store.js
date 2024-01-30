import { configureStore } from "@reduxjs/toolkit";
import isAuth from "./slices/isAuthSlice";
import userInfo from "./slices/userInfoSlice";
import favList from "./slices/favListSlice";

export const store = configureStore({
  reducer: {
    isAuth,
    userInfo,
    favList,
  },
});

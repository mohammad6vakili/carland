import { configureStore } from "@reduxjs/toolkit";
import isAuth from "./slices/isAuthSlice";
import userInfo from "./slices/userInfoSlice";
import favList from "./slices/favListSlice";
import loading from "./slices/Loading";
import media from "./slices/media";

export const store = configureStore({
  reducer: {
    isAuth,
    userInfo,
    favList,
    loading,
    media,
  },
});

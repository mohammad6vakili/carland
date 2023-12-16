import { configureStore } from "@reduxjs/toolkit";
import isAuth from "./slices/isAuthSlice";

export const store = configureStore({
  reducer: {
    isAuth,
  },
});

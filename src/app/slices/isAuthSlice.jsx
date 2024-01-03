import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

export const isAuthSlice = createSlice({
  name: "isAuth",
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsAuth } = isAuthSlice.actions;

export default isAuthSlice.reducer;

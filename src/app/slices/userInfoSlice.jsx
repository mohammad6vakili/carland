import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;

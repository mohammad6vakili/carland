import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favList: null,
};

export const favListSlice = createSlice({
  name: "favList",
  initialState,
  reducers: {
    setFavList: (state, action) => {
      state.favList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFavList } = favListSlice.actions;

export default favListSlice.reducer;

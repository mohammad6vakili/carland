import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favList: [],
};

export const favListSlice = createSlice({
  name: "favList",
  initialState,
  reducers: {
    setFavList: (state, action) => {
      state.favList === action.payload;
    },
    adFavList: (state, action) => {
      state.favList.push(action.payload);
    },
    removeFavList: (state, action) => {
      state.favList.filter((ad) => ad.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFavList, adFavList, removeFavList } = favListSlice.actions;

export default favListSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  media: null,
};

export const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setMedia: (state, action) => {
      state.media = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMedia } = mediaSlice.actions;

export default mediaSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
  name: "fav",
  initialState: {
    favProducts:[]
  },
  reducers: {
    addFav: (state, action) => {
      try {
        const product = action.payload;
        const exist = state.favProducts.find((item) => item.id === product.id);
        if (exist) {
          state.favProducts = state.favProducts.filter((item) => item.id !== exist.id);
        } else {
          state.favProducts.push(action.payload);
        }
      } catch (err) {}
    },
  },
});
export const { addFav } = favSlice.actions;
export default favSlice.reducer;

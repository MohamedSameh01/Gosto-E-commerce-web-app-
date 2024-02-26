import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
    name: "fav",
    initialState: [],
    reducers: {
        addFav: (state, action) => {
            try {
                const exist = state.find(item => item.id === action.payload.id);
                if (exist) {
                    state.filter(item => item.id !== exist.id);
                }
                else {
                    state.push(action.payload)
                }
            } catch (err) {
                console.log("error", err)
            }
        }


    }

})

export const { addFav } = favSlice.actions;
export default favSlice.reducer;
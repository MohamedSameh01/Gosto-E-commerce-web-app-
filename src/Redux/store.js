
import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./slices/cartSlice"
import favReducer from"./slices/favSlice"
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        fav:favReducer,
    }
})  

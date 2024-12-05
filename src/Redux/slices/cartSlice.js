/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { ADD_CART } from "../type";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      try {
        const exist = state.cart.find((item) => item.id === product.id);
        if (exist) {
          exist.amount++;
          exist.totalPrice += parseInt(product.price);
          state.totalAmount++;
          state.totalPrice += parseInt(product.price);
        } else {
          state.cart.push({
            id: product.id,
            amount: 1,
            price: parseInt(product.price),
            cover: product.cover,
            title: product.title,
            author: product.author,
          });
          state.totalAmount++;
          state.totalPrice += parseInt(product.price);
        }
      } catch (err) {
        console.log(err);
      }
    },
    removeItem: (state, action) => {
      const product = action.payload;
      try {
        const exist = state.cart.find((item) => item.id === product.id);
        if (exist.amount > 1) {
          exist.amount--;
          exist.totalPrice -= parseInt(product.price);
          state.totalAmount--;
          state.totalPrice -= parseInt(product.price);
        } else if (exist.amount === 1) {
          state.cart = state.cart.filter((item) => item.id !== product.id);
          state.totalAmount--;
          state.totalPrice -= parseInt(product.price);
        }
      } catch (err) {
        console.log(err);
      }
    },
    deleteItem: (state, action) => {
      try {
        const product = action.payload;
        const exist = state.cart.find((item) => item.id === product.id);
        state.totalAmount -= parseInt(exist.amount);
        state.totalPrice =
          state.totalPrice - parseInt(exist.amount) * parseInt(exist.price);
        state.cart = state.cart.filter((item) => item.id !== product.id);
      } catch (err) {
        console.log("error", err);
      }
    },
  },
});
export const { addItem, removeItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import data from "../../cartItems";

const initialState = {
  cartItems: data,
  total: 0,
  amount: 1,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    incItem: (state, action) => {
      const id = action.payload;
      const cartItem = state.cartItems.find((cart) => cart.id === id);
      cartItem.amount++;
    },
    decItem: (state, action) => {
      const id = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === id);
      if (cartItem.amount === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
      cartItem.amount--;
    },
  },
});

export const { clearCart, incItem, decItem } = cartSlice.actions;

export default cartSlice.reducer;

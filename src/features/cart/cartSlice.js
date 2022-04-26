import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: [cartItems],
  total: 0,
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    emptyCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { emptyCart } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const cartSlice = createSlice({
  name: "@@cart",
  initialState: {},
  reducers: {
    addBasket: (state, action) => {
      state[action.payload.name] = action.payload;
    },
    deleteBasket: (state, action) => {
      delete state[action.payload];
    },
    clearBasket: () => {
      return {};
    },
  },
});

export const { addBasket, deleteBasket, clearBasket } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
const selectCartData = (state) => state.cart;

export const selectCart = createSelector(selectCartData, (cartData) => {
  const dataArray = Object.values(cartData);
  return dataArray;
});
export const selectCartLength = (state) => Object.keys(state.cart).length;

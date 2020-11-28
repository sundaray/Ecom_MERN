import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
};

export const cartItemsAdded = createAsyncThunk(
  "cart/cartItemsAdded",
  async ({ id, qty }) => {
    const { data } = await axios.get(`/api/products/${id}`);
    return {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    };
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartItemsRemoved: {
      reducer(state, action) {
        state.cartItems = state.cartItems.filter(
          (x) => x.product !== action.payload
        );
      },
    },
  },
  extraReducers: {
    [cartItemsAdded.fulfilled]: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        state.cartItems.map((x) =>
          x.product === existItem.product ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }
    },
  },
});

export const { cartItemsRemoved } = cartSlice.actions;
export default cartSlice.reducer;

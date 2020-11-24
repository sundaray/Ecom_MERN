import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
};

export const cartItemsAdded = (id, qty) =>
  createAsyncThunk("cart/cartItemsAdded", async () => {
    const { data } = await axios.get(`/api/products/${id}`);
    return {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    };
  });

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [cartItemsAdded.fulfilled]: (state, action) => {
      //cartItems array should be updated after the following line, but it is not getting updated with the payload.
      state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export default cartSlice.reducer;

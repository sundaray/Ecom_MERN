import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./screens/productsSlice";
import cartReducer from "./screens/cartSlice";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
};

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  preloadedState,
});

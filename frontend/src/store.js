import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./screens/productsSlice";
import cartReducer from "./screens/cartSlice";
import userLoginReducer from "./screens/userLoginSlice";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
  },
  preloadedState,
});

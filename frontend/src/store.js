import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./screens/productsSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});

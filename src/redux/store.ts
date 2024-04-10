import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slices/wishlistSlice.slice";
import cartReducer from "./slices/cartSlice.slice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

export default store;

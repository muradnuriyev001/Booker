import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slices/wishlistSlice.slice";
import cartReducer from "./slices/cartSlice.slice";
import filterBookReducer from "./slices/filterBookSlice.slice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
    filterBook: filterBookReducer,
  },
});

export default store;

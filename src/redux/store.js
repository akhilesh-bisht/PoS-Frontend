import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/cartSlice";
import productsReducer from "../redux/Slices/productsSlice";
import searchReducer from "./Slices/searchSlice";
import categoryReducer from "./Slices/categorySlice";
const store = configureStore({
  reducer: {
    cart: CartSlice,
    products: productsReducer,
    search: searchReducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

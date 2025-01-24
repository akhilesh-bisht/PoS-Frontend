import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/cartSlice";
import purchaseInvoiceReducer from "./Slices/purchaseInvoiceSlice";
import productsReducer from "../redux/Slices/productsSlice";
import searchReducer from "./Slices/searchSlice";
import categoryReducer from "./Slices/categorySlice";
const store = configureStore({
  reducer: {
    cart: CartSlice,
    purchaseInvoices: purchaseInvoiceReducer,
    products: productsReducer,
    search: searchReducer,
    category: categoryReducer,
  },
});

export default store;

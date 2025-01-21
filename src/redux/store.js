import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/cartSlice";
import purchaseInvoiceReducer from "./Slices/purchaseInvoiceSlice";
import productsReducer from "../redux/Slices/productsSlice";
const store = configureStore({
  reducer: {
    cart: CartSlice,
    purchaseInvoices: purchaseInvoiceReducer,
    products: productsReducer,
  },
});

export default store;

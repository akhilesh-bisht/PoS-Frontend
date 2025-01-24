import { createSlice } from "@reduxjs/toolkit";

// Load products from localStorage or use the initial state if none exists
const loadProductsFromLocalStorage = () => {
  const storedProducts = localStorage.getItem("products");
  return storedProducts
    ? JSON.parse(storedProducts)
    : [
        {
          id: 1,
          name: "NPK Fertilizer",
          category: "Fertilizers",
          stock: 250,
          price: 750,
          status: "In Stock",
        },
        {
          id: 2,
          name: "Wheat Seeds",
          category: "Seeds",
          stock: 50,
          price: 120,
          status: "Low Stock",
        },
        {
          id: 3,
          name: "Tractor",
          category: "Machinery",
          stock: 0,
          price: 150000,
          status: "Out of Stock",
        },
      ];
};

// Save products to localStorage whenever there's a change
const saveProductsToLocalStorage = (state) => {
  localStorage.setItem("products", JSON.stringify(state));
};

const productsSlice = createSlice({
  name: "products",
  initialState: loadProductsFromLocalStorage(),
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
      saveProductsToLocalStorage(state);
    },
    editProduct: (state, action) => {
      const { id, name, category, stock, price, status } = action.payload;
      const product = state.find((product) => product.id === id);
      if (product) {
        product.name = name;
        product.category = category;
        product.stock = stock;
        product.price = price;
        product.status = status;
        saveProductsToLocalStorage(state);
      }
    },
    deleteProduct: (state, action) => {
      const updatedState = state.filter(
        (product) => product.id !== action.payload
      );
      saveProductsToLocalStorage(updatedState); // Save to local storage before returning
      return updatedState;
    },
  },
});

export const { addProduct, editProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;

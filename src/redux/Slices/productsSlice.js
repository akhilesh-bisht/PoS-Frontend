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
          stock: "250 units",
          price: "₹750/unit",
          status: "In Stock",
        },
        {
          id: 2,
          name: "Wheat Seeds",
          category: "Seeds",
          stock: "50 kg",
          price: "₹120/kg",
          status: "Low Stock",
        },
      ];
};

// Save products to localStorage whenever there's a change
const saveProductsToLocalStorage = (state) => {
  localStorage.setItem("products", JSON.stringify(state));
};

const productsSlice = createSlice({
  name: "products",
  initialState: loadProductsFromLocalStorage(), // Initialize state with localStorage data
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
      saveProductsToLocalStorage(state); // Save to localStorage after adding a product
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
        saveProductsToLocalStorage(state); // Save to localStorage after editing a product
      }
    },
    deleteProduct: (state, action) => {
      const updatedState = state.filter(
        (product) => product.id !== action.payload
      );
      saveProductsToLocalStorage(updatedState); // Save to localStorage after deleting a product
      return updatedState;
    },
  },
});

export const { addProduct, editProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;

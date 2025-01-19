import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const loadCartTotalsFromLocalStorage = () => {
  const storedTotals = localStorage.getItem("cartTotals");
  return storedTotals
    ? JSON.parse(storedTotals)
    : { totalPrice: 0, totalItems: 0 };
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const saveCartTotalsToLocalStorage = (totalPrice, totalItems) => {
  const totals = { totalPrice, totalItems };
  localStorage.setItem("cartTotals", JSON.stringify(totals));
};

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: loadCartFromLocalStorage(),
    totalPrice: loadCartTotalsFromLocalStorage().totalPrice, // Load total price from localStorage
    totalItems: loadCartTotalsFromLocalStorage().totalItems, // Load total items from localStorage
  },
  reducers: {
    // Update total price and item count whenever cart changes
    updateCartTotals: (state) => {
      const totalPrice = state.cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
      const totalItems = state.cart.reduce(
        (total, item) => total + item.qty,
        0
      );

      state.totalPrice = totalPrice;
      state.totalItems = totalItems;
      saveCartTotalsToLocalStorage(totalPrice, totalItems); // Save updated totals to localStorage
    },

    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push(action.payload);
      }
      saveCartToLocalStorage(state.cart);
      // After cart change, update totals
      state.totalPrice = 0;
      state.totalItems = 0;
      state.cart.forEach((item) => {
        state.totalPrice += item.price * item.qty;
        state.totalItems += item.qty;
      });
      saveCartTotalsToLocalStorage(state.totalPrice, state.totalItems); // Save updated totals
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      saveCartToLocalStorage(state.cart);
      // After cart change, update totals
      state.totalPrice = 0;
      state.totalItems = 0;
      state.cart.forEach((item) => {
        state.totalPrice += item.price * item.qty;
        state.totalItems += item.qty;
      });
      saveCartTotalsToLocalStorage(state.totalPrice, state.totalItems); // Save updated totals
    },

    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
      saveCartToLocalStorage(state.cart);
      // After cart change, update totals
      state.totalPrice = 0;
      state.totalItems = 0;
      state.cart.forEach((item) => {
        state.totalPrice += item.price * item.qty;
        state.totalItems += item.qty;
      });
      saveCartTotalsToLocalStorage(state.totalPrice, state.totalItems); // Save updated totals
    },

    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
      saveCartToLocalStorage(state.cart);
      // After cart change, update totals
      state.totalPrice = 0;
      state.totalItems = 0;
      state.cart.forEach((item) => {
        state.totalPrice += item.price * item.qty;
        state.totalItems += item.qty;
      });
      saveCartTotalsToLocalStorage(state.totalPrice, state.totalItems); // Save updated totals
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
  updateCartTotals,
} = CartSlice.actions;
export default CartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoices: JSON.parse(localStorage.getItem("purchaseInvoices")) || [],
};

const purchaseInvoiceSlice = createSlice({
  name: "purchaseInvoices",
  initialState,
  reducers: {
    addInvoice: (state, action) => {
      state.invoices.push(action.payload);
      localStorage.setItem("purchaseInvoices", JSON.stringify(state.invoices));
    },
    updateInvoice: (state, action) => {
      const { id, updatedInvoice } = action.payload;
      const index = state.invoices.findIndex((invoice) => invoice.id === id);
      if (index !== -1) {
        state.invoices[index] = updatedInvoice;
        localStorage.setItem(
          "purchaseInvoices",
          JSON.stringify(state.invoices)
        );
      }
    },
    deleteInvoice: (state, action) => {
      state.invoices = state.invoices.filter(
        (invoice) => invoice.id !== action.payload
      );
      // Update localStorage after deletion
      localStorage.setItem("purchaseInvoices", JSON.stringify(state.invoices));
    },
  },
});

export const { addInvoice, updateInvoice, deleteInvoice } =
  purchaseInvoiceSlice.actions;
export default purchaseInvoiceSlice.reducer;

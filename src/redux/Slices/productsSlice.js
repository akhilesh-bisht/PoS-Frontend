import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productAPI } from "../../api/apiService";

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await productAPI.getStockDetails();
      return data;
    } catch (error) {
      return rejectWithValue(error || "Failed to fetch products");
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/add",
  async (productData, { rejectWithValue }) => {
    try {
      const data = await productAPI.createProduct(productData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateExistingProduct = createAsyncThunk(
  "products/update",
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const data = await productAPI.updateProduct(id, productData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteExistingProduct = createAsyncThunk(
  "products/delete",
  async (id, { rejectWithValue }) => {
    try {
      await productAPI.deleteProduct(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    batchDetails: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = transformProducts(action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message;
      })
      /// add new product
      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(transformProduct(action.payload));
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message;
      })

      /// update new product
      .addCase(updateExistingProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateExistingProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.items.findIndex(
          (p) => p.id === action.payload.product_id
        );
        if (index !== -1) {
          state.items[index] = transformProduct(action.payload);
        }
      })
      .addCase(updateExistingProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message;
      })
      .addCase(deleteExistingProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteExistingProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.filter((p) => p.id !== action.payload);
      })
      .addCase(deleteExistingProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message;
      });
  },
});

// Helper functions for data transformation
const transformProducts = (apiData) => {
  return apiData.map((product) => transformProduct(product));
};

const transformProduct = (product) => ({
  id: product.id,
  name: product.product_name,
  category: product.category,
  stock: product.quantity,
  price: product.rate,
  status: calculateStatus(product.quantity),
  batch_no: product.batch_no,
  exp_date: product.exp_date,
  hsn_code: product.hsn_code,
  gst_rate: product.gst_rate,
});

const calculateStatus = (quantity) => {
  if (quantity === 0) return "Out of Stock";
  if (quantity < 20) return "Low Stock";
  return "In Stock";
};

export default productsSlice.reducer;

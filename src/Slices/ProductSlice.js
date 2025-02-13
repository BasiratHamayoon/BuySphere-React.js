import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch Products Async Action
export const fetchProducts = createAsyncThunk(
  "product/allProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log("Fetched Data:", response.data); // Debug API response
      return response.data;
    } catch (error) {
      console.error("API Fetch Error:", error);
      return rejectWithValue(error.response?.data || "An error occurred"); // Send error properly
    }
  }
);

// Redux Slice
export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    message: "",
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        console.log("Fetching started...");
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        console.log("Redux Store Updated:", state.products);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload || "Failed to fetch products";
        console.error("Fetching failed:", state.message);
      });
  },
});

export const { setProducts, setLoading, setMessage } = productSlice.actions;
export default productSlice.reducer;

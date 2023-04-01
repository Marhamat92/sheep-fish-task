import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "./productsService";

const initialState = {
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "" as string,
};

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (thunkAPI) => {
    const response = await productsService.getAllProducts();
    return response;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id: number, thunkAPI) => {
    const response = await productsService.deleteProduct(id);
    return response;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product: any, thunkAPI) => {
    const response = await productsService.addProduct(product);
    return response;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state: any) => state.initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = state.products.filter(
          (product: any) => product.id !== action.payload.id
        );
      })
      .addCase(deleteProduct.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;

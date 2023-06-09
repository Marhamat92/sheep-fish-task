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

//update product with id
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product: any, thunkAPI) => {
    const response = await productsService.updateProduct(product, product.id);
    return response;
  }
);

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id: any, thunkAPI) => {
    const response = await productsService.getProductById(id);
    return response;
  }
);

export const getAllCategories = createAsyncThunk(
  "products/getAllCategories",
  async (thunkAPI) => {
    const response = await productsService.getAllCategories();
    return response;
  }
);

export const getProductsByCategory = createAsyncThunk(
  "products/getProductsByCategory",
  async (category: string, thunkAPI) => {
    const response = await productsService.getProductsByCategory(category);
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
      .addCase(addProduct.fulfilled, (state: any, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state: any, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        if (state.products.length > 0) {
          const index = state.products.findIndex(
            (product: any) => product.id === action.payload.id
          );
          state.products[index] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state: any, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProduct.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllCategories.pending, (state: any, action: any) => {
        state.isLoading = true;
      })
      .addCase(getAllCategories.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getAllCategories.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getProductsByCategory.pending, (state: any, action: any) => {
        state.isLoading = true;
      })
      .addCase(getProductsByCategory.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProductsByCategory.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;

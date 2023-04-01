import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productsService from './productsService';


const initialState = {
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: ''
}



export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (thunkAPI) => {
    const response = await productsService.getAllProducts();
    return response;
  }
)

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId, thunkAPI) => {
    const response = await productsService.deleteProduct(productId);
    return response;
  }
)





export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: (state) => state.initialState
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
      }
      )
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      }
      )
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      }
      )
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = state.products.filter(product => product.id !== action.payload.productId);
      }
      )
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      }
      )
  }
})



export const { reset } = productSlice.actions;
export default productSlice.reducer;
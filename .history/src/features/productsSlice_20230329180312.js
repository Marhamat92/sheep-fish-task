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
  async (_, thunkAPI) => {
    try {

      const response = await productsService.getAllProducts();
      return response;
    } catch (error) {
      return error;
      return thunkAPI.rejectWithValue(error)
    }
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
        state.message = action.payload.message;
      }
      )
  }
})



export const { reset } = productSlice.actions;
export default productSlice.reducer;
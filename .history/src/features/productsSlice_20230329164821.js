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
  async () => {
    try {
      const response = await productsService.getAllProducts();
      return response;
    } catch (error) {
      return error;
    }
  }
)
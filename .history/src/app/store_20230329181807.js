import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productReducer from '../features/productsSlice';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';


export const store = configureStore({
  reducer: {
    products: productReducer
  },

  middleware: [thunk]
});
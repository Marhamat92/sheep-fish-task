import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productsSlice';
import logger from 'redux';



export const store = configureStore({
  reducer: {
    products: productReducer
  },

  //add middleware here
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

});
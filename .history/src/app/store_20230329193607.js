import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productsSlice';
import logger from 'redux-logger';







export const store = configureStore({
  reducer: {
    products: productReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),


});



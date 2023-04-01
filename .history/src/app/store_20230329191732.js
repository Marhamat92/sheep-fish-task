import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productsSlice';
import { createLogger } from 'redux-logger';






export const store = configureStore({



  reducer: {
    products: productReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),

  devTools: process.env.NODE_ENV !== 'production',





});

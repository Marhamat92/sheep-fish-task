import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productsSlice';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true,
  diff: true,
});










export const store = configureStore({
  reducer: {
    products: productReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  devTools: process.env.NODE_ENV !== 'production',
});



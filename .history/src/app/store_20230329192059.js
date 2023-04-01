import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productsSlice';
import logger from 'redux-logger';
import thunk from 'redux-thunk';






export const store = configureStore({
  reducer: {
    products: productReducer,
  },

  middleware: [thunk, logger]

});



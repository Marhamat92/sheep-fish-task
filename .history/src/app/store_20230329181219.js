import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productsSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    products: productReducer
  },

  //add default middleware to handle async actions
  middleware: [applyMiddleware(thunk), getDefaultMiddleware()]

});

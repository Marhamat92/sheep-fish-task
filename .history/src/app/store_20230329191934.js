import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productsSlice';
import logger from 'redux-logger';

//create default middleware to use in store
const middleware = [logger];





export const store = configureStore({
  reducer: {
    products: productReducer,
  },

  middleware,

});



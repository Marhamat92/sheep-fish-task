import { configureStore, logger } from '@reduxjs/toolkit';
import productReducer from '../features/productsSlice';




export const store = configureStore({
  reducer: {
    products: productReducer
  },

  //add middleware here
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

});

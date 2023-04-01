import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productsSlice';
import { Middleware } from '@reduxjs/toolkit';



export const store = configureStore({
  reducer: {
    products: productReducer
  },

  //add default middleware to handle async actions
  Middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

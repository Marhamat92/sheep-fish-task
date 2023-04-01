import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productsSlice';
import thunk from 'redux-thunk';







export const store = configureStore({
  reducer: {
    products: productReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: true
  }),


});



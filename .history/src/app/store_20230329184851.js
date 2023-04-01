import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productsSlice';

const logger = (store) => (next) => (action) => {
  console.log('Action Type: ', action.type);
  next(action);
}


export const store = configureStore({
  reducer: {
    products: productReducer,
  },

  //add middleware here
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: true,
  }).concat(logger)


});

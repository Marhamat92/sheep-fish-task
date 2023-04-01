import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productsSlice';
import categoryReducer from '../features/categoriesSlice';



export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
  },
});



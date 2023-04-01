import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productsSlice';




export default store = configureStore({
  reducer: {
    products: productReducer
  },

  //add default middleware to handle async actions
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: true,
    serializableCheck: false
  })

});

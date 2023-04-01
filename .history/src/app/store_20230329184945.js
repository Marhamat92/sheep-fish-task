import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productsSlice';


//add logger middleware
const logger = (store) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
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

import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menu/menu-slice';
import productsReducer from './products/products-reducer';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    products: productsReducer,
  },

  devTools: process.env.NODE_ENV === 'development',
});

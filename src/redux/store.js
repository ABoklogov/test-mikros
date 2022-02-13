import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menu/menu-slice';
import productsReducer from './products/products-reducer';
import userReducer from './user/user-slice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    products: productsReducer,
    user: userReducer,
  },

  devTools: process.env.NODE_ENV === 'development',
});

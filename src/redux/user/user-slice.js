/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit';
import * as userAction from './user-action.js';

const initialState = {
  basket: [],
  loveProducts: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [userAction.addShoppingOneElement](state, { payload }) {
      state.basket.push(payload);
    },

    [userAction.addShopping](state, { payload }) {
      state.basket.some(el => {
        if (el.id === payload.id) ++el.total;
      });
    },

    [userAction.removeShopping](state, { payload }) {
      state.basket.some(el => {
        if (el.id === payload.id) --el.total;
      });
    },

    [userAction.deleteProduct](state, { payload }) {
      state.basket = state.basket.filter(el => el.id !== payload);
    },

    [userAction.addLoveProduct](state, { payload }) {
      state.loveProducts.push(payload);
    },

    [userAction.deleteLoveProduct](state, { payload }) {
      state.loveProducts = state.loveProducts.filter(el => el.id !== payload);
    },
  },
});

export default userSlice.reducer;

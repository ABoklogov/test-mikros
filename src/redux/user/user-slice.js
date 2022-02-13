/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit';
import * as userAction from './user-action.js';

const initialState = {
  basket: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [userAction.addShoppingOneElement](state, { payload }) {
      state.basket.push(payload);
    },

    [userAction.addShopping](state, { payload }) {
      state.basket.forEach(el => {
        if (el.id === payload.id) ++el.total;
        if (el.id !== payload.id) return [...state.basket, payload];
      });
    },

    [userAction.removeShopping](state, { payload }) {
      state.basket.forEach(el => {
        if (el.total) if (el.id === payload.id) el.total = el.total - 1;
      });
      // state.basket.filter(el => el.id !== payload.id);
    },
  },
});

export default userSlice.reducer;

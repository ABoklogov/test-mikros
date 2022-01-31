import { createSlice } from '@reduxjs/toolkit';
import * as userAction from './user-action.js';

const initialState = {
  basket: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [userAction.addShopping](state, { payload }) {
      state.basket = state.basket + payload;
    },
  },
});

export default userSlice.reducer;

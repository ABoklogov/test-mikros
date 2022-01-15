import { createSlice } from '@reduxjs/toolkit';
import * as menuAction from './menu-action.js';

const initialState = {
  isOpenMenuPrice: true,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  extraReducers: {
    [menuAction.openMenuPrice](state) {
      state.isOpenMenuPrice = true;
    },

    [menuAction.closeMenuPrice](state) {
      state.isOpenMenuPrice = false;
    },
  },
});

export default menuSlice.reducer;

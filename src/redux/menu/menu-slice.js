import { createSlice } from '@reduxjs/toolkit';
import * as menuAction from './menu-action.js';

const initialState = {
  isOpenMenuPrice: true,
  isOpenMenuDimensions: true,
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

    [menuAction.openMenuDimensions](state) {
      state.isOpenMenuDimensions = true;
    },

    [menuAction.closeMenuDimensions](state) {
      state.isOpenMenuDimensions = false;
    },
  },
});

export default menuSlice.reducer;

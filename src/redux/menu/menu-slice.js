import { createSlice } from '@reduxjs/toolkit';
import * as menuAction from './menu-action.js';

const initialState = {
  isOpenMenuPrice: true,
  isOpenMenuDimensions: true,
  isOpenMenuColors: true,
  isOpenMenuCollection: false,
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

    [menuAction.openMenuColors](state) {
      state.isOpenMenuColors = true;
    },
    [menuAction.closeMenuColors](state) {
      state.isOpenMenuColors = false;
    },

    [menuAction.openMenuCollection](state) {
      state.isOpenMenuCollection = true;
    },
    [menuAction.closeMenuCollection](state) {
      state.isOpenMenuCollection = false;
    },
  },
});

export default menuSlice.reducer;

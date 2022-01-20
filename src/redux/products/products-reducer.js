import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchProductCategories, selectCategories } from './products-action';

const productCategories = createReducer([], {
  [fetchProductCategories]: (_, { payload }) => payload,

  [selectCategories]: (state, payload) => {},
});

const productsReducer = combineReducers({
  productCategories,
  selectCategories,
});

export default productsReducer;

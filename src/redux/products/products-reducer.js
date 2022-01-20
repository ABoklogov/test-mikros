import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchProductCategories,
  selectCategories,
  fetchProduct,
  sort,
  alphabeticalSorting,
} from './products-action';

const productCategories = createReducer([], {
  [fetchProductCategories]: (_, { payload }) => payload,
});

const products = createReducer([], {
  [fetchProduct]: (_, { payload }) => payload,

  [alphabeticalSorting]: state => {
    const sortProducts = state.sort((a, b) => {
      const nameA = a._source.RM_NAME.replace(/ .*/, '');
      const nameB = b._source.RM_NAME.replace(/ .*/, '');
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    return sortProducts;
  },
});

const sortOrder = createReducer('base', {
  [sort]: (_, { payload }) => payload,
});

// const filterCategories = createReducer([], {
//   [selectCategories]: (state, { payload }) => [...state, payload],
// });

const productsReducer = combineReducers({
  productCategories,
  products,
  sortOrder,
  // filterCategories,
});

export default productsReducer;

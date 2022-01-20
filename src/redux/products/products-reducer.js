import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchProductCategories,
  selectCategories,
  fetchProduct,
  sort,
  display,
  alphabeticalSorting,
  priceSorting,
  displayBy20,
  displayBy40,
  displayBy60,
} from './products-action';

const productCategories = createReducer([], {
  [fetchProductCategories]: (_, { payload }) => payload,
});

const products = createReducer([], {
  [fetchProduct]: (_, { payload }) => payload,

  [alphabeticalSorting]: state => {
    const sortProducts = state.sort((a, b) => {
      const nameA = a._source.RM_NAME;
      const nameB = b._source.RM_NAME;
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    return sortProducts;
  },

  [priceSorting]: state =>
    state.sort((a, b) => a._source.PRICE.BASE - b._source.PRICE.BASE),

  [displayBy20]: state => state.slice(0, 2),
  [displayBy40]: state => state.slice(0, 4),
  [displayBy60]: state => state.slice(0, 6),
});

const sortOrder = createReducer('base', {
  [sort]: (_, { payload }) => payload,
});

const displayBy = createReducer('20', {
  [display]: (_, { payload }) => payload,
});

// const filterCategories = createReducer([], {
//   [selectCategories]: (state, { payload }) => [...state, payload],
// });

const productsReducer = combineReducers({
  productCategories,
  products,
  sortOrder,
  displayBy,
  // filterCategories,
});

export default productsReducer;

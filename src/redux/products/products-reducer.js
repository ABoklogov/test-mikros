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
  fixPriceRange,
  showFilteredData,
  showProductsFilteredPrice,
  showProductsFilteredDimensions,
  showProductsFilteredColors,
  fixDimensions,
  deleteDimensions,
  fixColors,
  deleteColors,
  fetchFilteredProducts,
  showProductPage,
  // resetFilters,
} from './products-action';
// import options from '../../options';

const productCategories = createReducer([], {
  [fetchProductCategories]: (_, { payload }) => payload,
});

const products = createReducer([], {
  [fetchProduct]: (_, { payload }) => payload,

  [alphabeticalSorting]: state =>
    state.sort((a, b) => {
      const nameA = a._source.RM_NAME;
      const nameB = b._source.RM_NAME;
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    }),

  [priceSorting]: state =>
    state.sort((a, b) => a._source.PRICE.BASE - b._source.PRICE.BASE),

  [showProductsFilteredPrice]: (state, { payload }) =>
    state.filter(
      product =>
        payload[0] <= product._source.PRICE.BASE &&
        product._source.PRICE.BASE <= payload[1],
    ),

  [showProductsFilteredDimensions]: (state, { payload }) =>
    state.filter(product =>
      payload.includes(product._source.PROPERTYS.RAZMER?.match(/\d+/)[0]),
    ),

  [showProductsFilteredColors]: (state, { payload }) => {
    function capitalize(s) {
      return s[0].toUpperCase() + s.slice(1);
    }

    return state.filter(product =>
      payload.includes(capitalize(product._source.PROPERTYS.TSVET)),
    );
  },

  [showProductPage]: (state, payload) => state.slice(payload[0], payload[1]),
});

const filteredProducts = createReducer([], {
  [fetchFilteredProducts]: (_, { payload }) => payload,

  [displayBy20]: state => state.slice(0, 20),
  [displayBy40]: state => state.slice(0, 40),
  [displayBy60]: state => state.slice(0, 60),
});

const sortOrder = createReducer('base', {
  [sort]: (_, { payload }) => payload,
});

const displayBy = createReducer('20', {
  [display]: (_, { payload }) => payload,
});

const priceRange = createReducer([], {
  [fixPriceRange]: (state, { payload }) => (state = payload),
});

const dimensions = createReducer([], {
  [fixDimensions]: (_, { payload }) => payload,

  [deleteDimensions]: (state, { payload }) =>
    state.filter(el => el !== payload),
});

const colors = createReducer([], {
  [fixColors]: (_, { payload }) => payload,

  [deleteColors]: (state, { payload }) => state.filter(el => el !== payload),
});

const dataFiltered = createReducer(false, {
  [showFilteredData]: (_, { payload }) => payload,
});

// const filterReset = createReducer(false, {
//   [resetFilters]: (_, { payload }) => payload,
// });
// const filterCategories = createReducer([], {
//   [selectCategories]: (state, { payload }) => [...state, payload],
// });

const productsReducer = combineReducers({
  productCategories,
  products,
  sortOrder,
  displayBy,
  priceRange,
  dimensions,
  colors,
  dataFiltered,
  filteredProducts,
  // filterReset,
  // filterCategories,
});

export default productsReducer;

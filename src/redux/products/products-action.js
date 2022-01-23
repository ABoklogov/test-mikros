import { createAction } from '@reduxjs/toolkit';

export const fetchProductCategories = createAction(
  'products/fetchProductCategories',
);

export const fetchProduct = createAction('products/fetchProduct');

export const sort = createAction('products/sort');
export const display = createAction('products/display');

export const alphabeticalSorting = createAction('products/alphabeticalSorting');
export const priceSorting = createAction('products/priceSorting');

export const displayBy20 = createAction('products/displayBy20');
export const displayBy40 = createAction('products/displayBy40');
export const displayBy60 = createAction('products/displayBy60');

export const fixPriceRange = createAction('products/fixPriceRange');

export const fixDimensions = createAction('products/fixDimensions');
export const deleteDimensions = createAction('products/deleteDimensions');

export const showFilteredData = createAction('products/showFilteredData');

export const showProductsFilteredPrice = createAction(
  'products/showProductsFilteredPrice',
);
// export const selectCategories = createAction('products/selectCategories');

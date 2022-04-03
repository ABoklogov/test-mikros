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

export const changeLocationProducts = createAction(
  'products/changeLocationProducts',
);

export const fixPriceRange = createAction('products/fixPriceRange');

export const fixDimensions = createAction('products/fixDimensions');
export const deleteDimensions = createAction('products/deleteDimensions');

export const fixColors = createAction('products/fixColors');
export const deleteColors = createAction('products/deleteColors');

export const showFilteredData = createAction('products/showFilteredData');

export const showProductsFilteredPrice = createAction(
  'products/showProductsFilteredPrice',
);

export const showProductsFilteredDimensions = createAction(
  'products/showProductsFilteredDimensions',
);

export const showProductsFilteredColors = createAction(
  'products/showProductsFilteredColors',
);

export const fetchFilteredProducts = createAction(
  'product/fetchFilteredProducts',
);

export const showProductPage = createAction('product/showProductPage');

export const filteringByCategory = createAction('products/filteringByCategory');
export const addCategory = createAction('products/addCategory');
export const deleteCategory = createAction('products/deleteCategory');

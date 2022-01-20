import { createAction } from '@reduxjs/toolkit';

export const fetchProductCategories = createAction(
  'products/fetchProductCategories',
);

export const fetchProduct = createAction('products/fetchProduct');

export const sort = createAction('products/sort');

export const alphabeticalSorting = createAction('products/alphabeticalSorting');

// export const selectCategories = createAction('products/selectCategories');

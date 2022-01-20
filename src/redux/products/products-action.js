import { createAction } from '@reduxjs/toolkit';

export const fetchProductCategories = createAction(
  'products/fetchProductCategories',
);

export const selectCategories = createAction('products/selectCategories');

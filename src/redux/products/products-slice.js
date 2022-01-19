import { createSlice } from '@reduxjs/toolkit';
import * as productsAction from './products-action';
import data from '../../data.json';
const products = data.hits.hits;

const initialState = {
  productCategories: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [productsAction.fetchProductCategories](state) {
      const arrCategories = [];
      products.forEach(product => {
        const categoriesList = Object.values(product._source.SECTIONS);
        categoriesList.forEach(el => {
          arrCategories.push(el.NAME);
        });
      });

      state.productCategories = [...arrCategories];
    },
  },
});

export default productsSlice.reducer;

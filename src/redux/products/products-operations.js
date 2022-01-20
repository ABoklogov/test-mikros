import { fetchProductCategories, fetchProduct } from './products-action';
import removeDuplicates from '../../lib/removeDuplicates.js';
import data from '../../data.json';
const products = data.hits.hits;

export const fetchCategories = () => async dispatch => {
  const data = await new Promise((resolve, reject) => {
    const arrCategories = [];
    products.forEach(product => {
      const categoriesList = Object.values(product._source.SECTIONS);
      categoriesList.forEach(el => {
        arrCategories.push({
          NAME: el.NAME,
          ID: el.ID,
          URL: el.URL,
          CLICKED: false,
        });
      });
    });
    resolve(removeDuplicates(arrCategories));
  });

  dispatch(fetchProductCategories(data));
};

export const fetchProducts = () => async dispatch => {
  const newProducts = products.filter(
    ({ _source }) => _source.STORE[472] !== 0 && _source.STORE[475] !== 0,
  );
  dispatch(fetchProduct(newProducts));
};

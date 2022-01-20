import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  productsSelectors,
  productsOperations,
  productsAction,
} from '../../redux/products';
import s from './ProductList.module.css';
import ProductItem from '../ProductItem';

const ProductList = () => {
  const products = useSelector(productsSelectors.getListProduct);
  console.log(products);
  const sortOrder = useSelector(productsSelectors.getSortOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sortOrder === 'алфавиту') {
      dispatch(productsAction.alphabeticalSorting());
    }
    // if (sortOrder === 'цене') {
    // }
    if (sortOrder === 'base') {
      dispatch(productsOperations.fetchProducts());
    }
  }, [dispatch, sortOrder]);

  return (
    <ul className={s.box}>
      {products?.map(({ _id, _source }) => (
        <li className={s.productItem} key={_id}>
          <ProductItem source={_source} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;

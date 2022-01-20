import { useEffect } from 'react';
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
  // console.log(products);
  const sortOrder = useSelector(productsSelectors.getSortOrder);
  const displayBy = useSelector(productsSelectors.getDisplayBy);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsOperations.fetchProducts());

    if (sortOrder === 'алфавиту')
      dispatch(productsAction.alphabeticalSorting());

    if (sortOrder === 'цене') dispatch(productsAction.priceSorting());

    if (sortOrder === 'base') dispatch(productsOperations.fetchProducts());

    if (displayBy === '20') dispatch(productsAction.displayBy20());

    if (displayBy === '40') dispatch(productsAction.displayBy40());

    if (displayBy === '60') dispatch(productsAction.displayBy60());
  }, [dispatch, displayBy, sortOrder]);

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

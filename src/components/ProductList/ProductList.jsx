import { useEffect, useState } from 'react';
import s from './ProductList.module.css';
import ProductItem from '../ProductItem';
import data from '../../data.json';
const products = data.hits.hits;
console.log(products);

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const newProducts = products.filter(
      ({ _source }) => _source.STORE[472] !== 0 && _source.STORE[475] !== 0,
    );
    setFilteredProducts([...newProducts]);
  }, []);

  return (
    <ul className={s.box}>
      {filteredProducts?.map(({ _id, _source }) => (
        <li className={s.productItem} key={_id}>
          <ProductItem source={_source} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;

import { useEffect, useState } from 'react';
import s from './ProductList.module.css';
import data from '../../data.json';
const products = data.hits.hits;

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const newProducts = products.filter(
      ({ _source }) => _source.STORE[472] !== 0 && _source.STORE[475] !== 0,
    );
    setFilteredProducts([...newProducts]);
  }, []);

  return (
    <div className={s.box}>
      {filteredProducts?.map(({ _id, _source }) => (
        <div key={_id}>
          <img src={_source.DETAIL_PICTURE} alt={_source.RM_NAME} />
          <p>{_source.PROPERTYS.CML2_ARTICLE}</p>
          <p>{_source.PRICE.BASE} ₽</p>
          <p>
            Наличие на складах:
            <span>Ростов-на-дону - {`${_source.STORE[475]}`}</span>
            <span>Воронеж - {`${_source.STORE[472]}`}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

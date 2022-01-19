import s from './ListPossibleGoods.module.css';
// import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productsSelectors, productsAction } from '../../redux/products';

const ListPossibleGoods = () => {
  const dispatch = useDispatch();
  const getListProductCategories = useSelector(
    productsSelectors.getListProductCategories,
  );
  console.log(getListProductCategories);
  dispatch(productsAction.fetchProductCategories());

  return (
    <div className={s.box}>
      <button className={s.buttons}>Открытки</button>
      <button className={s.buttons}>Конверты для денег</button>
      <button className={s.buttons}>Приглашения</button>
      <button className={s.buttons}>Плакаты, гирлянды</button>
    </div>
  );
};

export default ListPossibleGoods;

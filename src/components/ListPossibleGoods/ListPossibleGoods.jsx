import s from './ListPossibleGoods.module.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  productsSelectors,
  productsOperations,
  productsAction,
} from '../../redux/products';

const ListPossibleGoods = () => {
  const getListProductCategories = useSelector(
    productsSelectors.getListProductCategories,
  );
  const filteredCategories = useSelector(
    productsSelectors.getFilteredCategories,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsOperations.fetchCategories());
  }, [dispatch]);

  const chooseCategory = e => {
    const selectedCategory = e.target.innerText;
    const foundCategory = filteredCategories.find(
      el => el === selectedCategory,
    );

    if (!foundCategory) {
      dispatch(productsAction.addCategory(selectedCategory));
      e.target.style.backgroundColor = '#0097ff';
      e.target.style.color = '#000c0c';
    } else {
      dispatch(productsAction.deleteCategory(selectedCategory));
      e.target.style.backgroundColor = '';
      e.target.style.color = '';
    }
  };

  return (
    <div>
      <h2 className={s.title}>Категории товаров:</h2>
      <ul className={s.box}>
        {getListProductCategories?.map(({ NAME, ID }) => (
          <li key={ID}>
            <button onClick={chooseCategory} className={s.buttons}>
              {NAME}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPossibleGoods;

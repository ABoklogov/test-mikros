import s from './ListPossibleGoods.module.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productsSelectors, productsOperations } from '../../redux/products';

const ListPossibleGoods = () => {
  const [listDeletedCategories, setListDeletedCategories] = useState([]);

  const getListProductCategories = useSelector(
    productsSelectors.getListProductCategories,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsOperations.fetchCategories());
  }, [dispatch]);

  const chooseCategory = e => {
    getListProductCategories.forEach(el => {
      if (el.NAME === e.target.innerText)
        setListDeletedCategories(listDeletedCategories => [
          el,
          ...listDeletedCategories,
        ]);
    });
  };

  console.log(listDeletedCategories);

  return (
    <ul className={s.box}>
      {getListProductCategories?.map(({ NAME, ID }) => (
        <li key={ID}>
          <button onClick={chooseCategory} className={s.buttons}>
            {NAME}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListPossibleGoods;

import { useSelector, useDispatch } from 'react-redux';
import { userSelectors, userAction } from '../../redux/user';
import s from './BasketToolptip.module.css';
import close from '../../images/icons/close.svg';

const BasketToolptip = () => {
  const dispatch = useDispatch();
  const listProductsInBasket = useSelector(userSelectors.getBasket);

  const removeProduct = e => {
    dispatch(userAction.deleteProduct(e.target.id));
  };

  return (
    <ul className={s.list}>
      {listProductsInBasket.map(({ id, source, total }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>
            {source.RM_NAME}: <span>{total} шт.</span>
          </p>
          <img
            onClick={removeProduct}
            src={close}
            width="20"
            alt="close"
            id={id}
            className={s.close}
          />
        </li>
      ))}
    </ul>
  );
};

export default BasketToolptip;

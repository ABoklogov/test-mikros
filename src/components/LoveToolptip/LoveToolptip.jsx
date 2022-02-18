import { useSelector, useDispatch } from 'react-redux';
import { userSelectors, userAction } from '../../redux/user';
import s from './LoveToolptip.module.css';
import close from '../../images/icons/close.svg';

const LoveToolptip = () => {
  const dispatch = useDispatch();
  const getLoveProducts = useSelector(userSelectors.getLoveProducts);

  const removeProduct = e => {
    dispatch(userAction.deleteLoveProduct(e.target.id));
  };

  return (
    <ul className={s.list}>
      {getLoveProducts.map(({ id, name }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>{name}</p>
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

export default LoveToolptip;

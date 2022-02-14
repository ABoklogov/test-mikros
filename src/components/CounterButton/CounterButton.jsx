import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAction, userSelectors } from '../../redux/user';
import s from './CounterButton.module.css';
import { ClickAwayListener } from '@mui/base';

const CounterButton = ({ setButtonBasket, source, id }) => {
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();
  const listProductsInBasket = useSelector(userSelectors.getBasket);

  const basketProduct = {
    total: number,
    id,
    source,
  };

  useEffect(() => {
    //проверяем пуста ли корзина?:
    if (listProductsInBasket.length === 0) {
      dispatch(userAction.addShoppingOneElement(basketProduct));
      return;
    }

    // проверяем есть ли в корзине данный продукт? Если есть устанавиваем ему нужное значение total:
    const currentProduct = listProductsInBasket.find(el => el.id === id);
    if (currentProduct?.id === id) setNumber(currentProduct.total);

    // проверяем наличие товара в корзине, если его нет, то добавляем:
    const presenceProductInBasket = listProductsInBasket.some(
      el => el.id === id,
    );
    if (!presenceProductInBasket)
      dispatch(userAction.addShoppingOneElement(basketProduct));
  }, []);

  const increment = () => {
    setNumber(number + 1);
    dispatch(userAction.addShopping(basketProduct));
  };

  const decrement = () => {
    if (number <= 1) {
      setNumber(1);
      return;
    }
    setNumber(number - 1);
    dispatch(userAction.removeShopping(basketProduct));
  };

  const handleClose = () => {
    setButtonBasket(true);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div className={s.box} dataid="counter">
        <button onClick={decrement} className={s.btn} dataid="counter">
          <svg
            dataid="counter"
            width="15"
            height="3"
            viewBox="0 0 15 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              dataid="counter"
              d="M1.1157 2.6158H6.36735H13.8843C14.5005 2.6158 15 2.11628 15 1.50009C15 0.883909 14.5005 0.384392 13.8843 0.384392H6.36735H1.1157C0.499517 0.384392 0 0.883909 0 1.50009C0 2.11628 0.499516 2.6158 1.1157 2.6158Z"
              style={number === 1 ? { fill: '#DDDDDD' } : { fill: '#0097FF' }}
            />
          </svg>
        </button>
        <span className={s.number} dataid="counter">
          {number}
        </span>
        <button onClick={increment} className={s.btn} dataid="counter">
          <svg
            dataid="counter"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              dataid="counter"
              d="M7.5 15.0001C6.87445 15.0001 6.36735 14.493 6.36735 13.8674V8.61579H1.1157C0.499516 8.61579 0 8.11628 0 7.50009C0 6.88391 0.499517 6.38439 1.1157 6.38439H6.36735V1.13275C6.36735 0.507198 6.87445 9.15527e-05 7.5 9.15527e-05C8.12555 9.15527e-05 8.63265 0.507197 8.63265 1.13274V6.38439H13.8843C14.5005 6.38439 15 6.88391 15 7.50009C15 8.11628 14.5005 8.61579 13.8843 8.61579H8.63265V13.8674C8.63265 14.493 8.12555 15.0001 7.5 15.0001Z"
              fill="#0097FF"
            />
          </svg>
        </button>
      </div>
    </ClickAwayListener>
  );
};

export default CounterButton;

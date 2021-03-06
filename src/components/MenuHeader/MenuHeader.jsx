import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../redux/user';
import s from './MenuHeader.module.css';
import Tooltip from '@mui/material/Tooltip';
import logo from '../../images/icons/logo.svg';
import full from '../../images/icons/full.svg';
import person from '../../images/icons/person.svg';
import love from '../../images/icons/love.svg';
import iconKatalog from '../../images/icons/catalog.svg';
import Button from '../Button';
import InputSearch from '../InputSearch';
import options from '../../options.js';
import BasketToolptip from '../BasketToolptip';
import LoveToolptip from '../LoveToolptip';

const MenuHeader = () => {
  const [basketPrice, setBasketPrice] = useState(0);
  const listProductsInBasket = useSelector(userSelectors.getBasket);
  const getLoveProducts = useSelector(userSelectors.getLoveProducts);
  const textBtn = options.buttons.katalog.text;
  const altIconBtn = options.buttons.katalog.alt;

  // подсчет стоимости товаров из корзины:
  useEffect(() => {
    const totalPrice = listProductsInBasket.reduce(
      (acc, { total, source }) => acc + total * source.PRICE.BASE,
      0,
    );
    setBasketPrice(totalPrice);
  }, [listProductsInBasket]);

  return (
    <div className={s.box}>
      <a href="#" className={s.logo}>
        <img src={logo} alt="logo" width={190} />
      </a>

      <div className={s.subMenuLeft}>
        <p className={s.title}>Крупнейший выбор товаров для праздника</p>
        <p className={s.subTitle}>Оптовый интернет - магазин</p>
        <div className={s.searchBox}>
          <Button text={textBtn} alt={altIconBtn} icon={iconKatalog} />
          <InputSearch />
        </div>
      </div>

      <div className={s.subMenuRight}>
        <div className={s.topBox}>
          <span>
            <p className={s.tel}>8 (900) 949 83-73</p>
            <a className={s.telLink} href="#">
              Заказать звонок
            </a>
          </span>

          <span>
            <p className={s.tel}>8 (900) 949 83-73</p>
            <p className={s.telText}>Бесплатно по РФ</p>
          </span>
        </div>

        <div className={s.bottomBox}>
          <a className={s.links} href="#">
            <span>
              <img src={person} alt="person" width={35} />
            </span>

            <p className={s.linksText}>Войти</p>
          </a>
          <Tooltip
            title={
              listProductsInBasket.length === 0 ? (
                'Корзина пуста'
              ) : (
                <BasketToolptip />
              )
            }
          >
            <a className={s.links} href="#">
              <span>
                <img src={full} alt="full" width={35} />
              </span>

              <p className={s.fullPrice}>{basketPrice.toFixed(2)}р.</p>
            </a>
          </Tooltip>
          <Tooltip
            title={getLoveProducts.length === 0 ? 'пусто' : <LoveToolptip />}
          >
            <a className={s.links} href="#">
              <span>
                <img src={love} alt="love" width={35} />
              </span>

              <p className={s.linksText}>Избранное</p>
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;

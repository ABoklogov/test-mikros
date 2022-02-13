import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { productsAction, productsSelectors } from '../../redux/products';
import s from './ProductItem.module.css';
import product from '../../images/product.png';
import love from '../../images/icons/love.svg';
import wet from '../../images/icons/wet.svg';
import { timeUntil } from '@tobynatooor/countdown';
import ButtonBasket from '../ButtonBasket';
import CounterButton from '../CounterButton';

const ProductItem = ({ source, id }) => {
  const sale = source.PROPERTYS.SKIDKA !== '0';
  const label = source.PROPERTYS.TOVAR_DNYA === 'Да';
  const salePercent = source.PROPERTYS.SKIDKA;
  const articule = source.PROPERTYS.CML2_ARTICLE;
  const name = source.RM_NAME;
  const oldPrice = source.PRICE.OLD_PRICE;
  const basePrice = source.PRICE.BASE;
  const rostov = source.STORE[475];
  const voronezh = source.STORE[472];
  const baseUnit = source.PROPERTYS.CML2_BASE_UNIT;
  const minPartiya = source.PROPERTYS.MINIMALNAYA_PARTIYA;
  const endPoint = timeUntil('2022-02-28T20:20:20');
  const endPointString = `${endPoint.days % 365}:${endPoint.hours % 24}:${
    endPoint.minutes % 60
  }`;
  const [buttonBasket, setButtonBasket] = useState(true);
  // const dispatch = useDispatch();
  // const dataFiltered = useSelector(productsSelectors.getDataFiltered);

  // useEffect(() => {
  //   if (dataFiltered) dispatch(productsAction.showFilteredData(false));
  // }, [dispatch]);

  return (
    <div className={s.box}>
      <div className={s.articuleBox}>
        <p className={s.articule}>
          Артикул: <span className={s.articuleNum}>{articule}</span>
        </p>
        <img src={love} alt="love" />
      </div>

      <div className={s.imageBox}>
        <img className={s.image} src={product} alt="product" />
        {label && (
          <div className={s.label}>
            <span>Товар дня</span>
          </div>
        )}
      </div>

      <div>
        <p className={s.infoProduct}>{name}</p>

        <div className={s.priceBox}>
          <p className={s.price}>
            {basePrice} <span>₽</span>
          </p>
          {oldPrice !== 0 && <span className={s.oldPrice}>{oldPrice}</span>}

          {oldPrice !== 0 && (
            <div className={s.wet}>
              <img src={wet} alt="wet" />
              <span>-{salePercent}%</span>
            </div>
          )}
        </div>

        <div className={s.availabilityBox}>
          <div className={s.availabilitySubBox}>
            <p>Наличие на складах:</p>
            <span>Ростов-на-дону - {`${rostov}`} упак.</span>
            <span>Воронеж - {`${voronezh}`} упак.</span>
          </div>
          {buttonBasket ? (
            <ButtonBasket setButtonBasket={setButtonBasket} />
          ) : (
            <CounterButton
              setButtonBasket={setButtonBasket}
              price={basePrice}
              source={source}
              id={id}
            />
          )}
        </div>

        <div
          className={s.footerBox}
          style={
            sale
              ? { justifyContent: 'space-between' }
              : { justifyContent: 'flex-end' }
          }
        >
          {sale && (
            <p className={s.endPromotion}>
              До конца акции:
              <span>{` ${endPointString}`}</span>
            </p>
          )}
          <p className={s.consignment}>
            Мин. партия:
            <span>{` ${minPartiya} ${baseUnit}.`}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

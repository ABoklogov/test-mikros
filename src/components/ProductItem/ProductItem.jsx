import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelectors } from '../../redux/products';
import { userAction, userSelectors } from '../../redux/user';
import styleGrid from './ProductItem.module.css';
import styleLine from './ProductItemLine.module.css';
import product from '../../images/product.png';
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
  const [loveProduct, setLoveProduct] = useState(false);
  const dispatch = useDispatch();
  const getLoveProducts = useSelector(userSelectors.getLoveProducts);
  const productDisplayGrid = useSelector(productsSelectors.getProductsLocation);
  // const dataFiltered = useSelector(productsSelectors.getDataFiltered);

  // useEffect(() => {
  //   if (dataFiltered) dispatch(productsAction.showFilteredData(false));
  // }, [dispatch]);
  useEffect(() => {
    const currentProduct = getLoveProducts.find(el => el.id === id);
    currentProduct?.id === id ? setLoveProduct(true) : setLoveProduct(false);
  }, [getLoveProducts, id]);

  const likedProduct = {
    name,
    id,
  };

  const toglleLoveProducts = () => {
    setLoveProduct(!loveProduct);
    if (getLoveProducts.length === 0) {
      dispatch(userAction.addLoveProduct(likedProduct));
      return;
    }

    const currentProduct = getLoveProducts.find(el => el.id === id);

    currentProduct?.id !== id
      ? dispatch(userAction.addLoveProduct(likedProduct))
      : dispatch(userAction.deleteLoveProduct(id));
  };

  return (
    <div className={styleGrid.box}>
      <div className={styleGrid.articuleBox}>
        <p className={styleGrid.articule}>
          Артикул: <span className={styleGrid.articuleNum}>{articule}</span>
        </p>

        <svg
          onClick={toglleLoveProducts}
          id={id}
          className={styleGrid.loveIcon}
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6912 30.2762L5.21527 18.3259C1.98283 14.9599 2.18638 9.44067 5.65721 6.34272C9.10053 3.26931 14.3215 3.86612 17.0425 7.64416L17.5 8.27931L17.9575 7.64416C20.6786 3.86612 25.8994 3.26931 29.3428 6.34272C32.8137 9.44067 33.0173 14.9599 29.7847 18.3259L18.3088 30.2762C17.8621 30.7412 17.1379 30.7412 16.6912 30.2762Z"
            fill="white"
            stroke="#5C5C5C"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={
              loveProduct
                ? { fill: '#fd3e49', stroke: '#fd3e49' }
                : { fill: 'white' }
            }
          />
        </svg>
      </div>

      <div className={productDisplayGrid ? '' : styleLine.lineBox}>
        <div
          className={
            productDisplayGrid ? styleGrid.imageBox : styleLine.imageBox
          }
        >
          <img
            className={productDisplayGrid ? styleGrid.image : styleLine.image}
            src={product}
            alt="product"
          />
          {label && (
            <div className={styleGrid.label}>
              <span>Товар дня</span>
            </div>
          )}
        </div>

        <div className={productDisplayGrid ? '' : styleLine.contentBox}>
          <p
            className={
              productDisplayGrid ? styleGrid.infoProduct : styleLine.infoProduct
            }
          >
            {name}
          </p>

          <div className={productDisplayGrid ? '' : styleLine.contentSubBox}>
            <div className={styleGrid.priceBox}>
              <p className={styleGrid.price}>
                {basePrice} <span>₽</span>
              </p>
              {oldPrice !== 0 && (
                <span className={styleGrid.oldPrice}>{oldPrice}</span>
              )}

              {oldPrice !== 0 && (
                <div className={styleGrid.wet}>
                  <img src={wet} alt="wet" />
                  <span>-{salePercent}%</span>
                </div>
              )}
            </div>

            <div
              className={
                productDisplayGrid
                  ? styleGrid.availabilityBox
                  : styleLine.availabilityBox
              }
            >
              <div
                className={
                  productDisplayGrid
                    ? styleGrid.availabilitySubBox
                    : styleLine.availabilitySubBox
                }
              >
                <p>Наличие на складах:</p>
                <span>Ростов-на-дону - {`${rostov}`} упак.</span>
                <span>Воронеж - {`${voronezh}`} упак.</span>
              </div>
              {buttonBasket ? (
                <ButtonBasket setButtonBasket={setButtonBasket} />
              ) : (
                <CounterButton
                  setButtonBasket={setButtonBasket}
                  source={source}
                  id={id}
                />
              )}
            </div>

            <div
              className={styleGrid.footerBox}
              style={
                sale
                  ? { justifyContent: 'space-between' }
                  : { justifyContent: 'flex-end' }
              }
            >
              {sale && (
                <p className={styleGrid.endPromotion}>
                  До конца акции:
                  <span>{` ${endPointString}`}</span>
                </p>
              )}
              <p className={styleGrid.consignment}>
                Мин. партия:
                <span>{` ${minPartiya} ${baseUnit}.`}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

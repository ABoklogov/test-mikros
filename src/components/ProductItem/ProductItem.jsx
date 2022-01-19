import s from './ProductItem.module.css';
import product from '../../images/product.png';
import love from '../../images/icons/love.svg';
import wet from '../../images/icons/wet.svg';

const ProductItem = ({ source }) => {
  const label = source.PROPERTYS.TOVAR_DNYA === 'Да';
  const oldPrice = source.PRICE.OLD_PRICE;

  return (
    <div className={s.box}>
      <div className={s.articuleBox}>
        <p className={s.articule}>
          Артикул:{' '}
          <span className={s.articuleNum}>{source.PROPERTYS.CML2_ARTICLE}</span>
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
        <p className={s.infoProduct}>{source.RM_NAME}</p>
        <div className={s.priceBox}>
          <p className={s.price}>{source.PRICE.BASE} ₽</p>
          {oldPrice !== 0 && <span className={s.oldPrice}>{oldPrice}</span>}

          {oldPrice !== 0 && (
            <div className={s.wet}>
              <img src={wet} alt="wet" />
              <span>-50%</span>
            </div>
          )}
        </div>
        <p>
          Наличие на складах:
          <span>Ростов-на-дону - {`${source.STORE[475]}`}</span>
          <span>Воронеж - {`${source.STORE[472]}`}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductItem;

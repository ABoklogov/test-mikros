import s from './MainFilters.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { productsSelectors, productsAction } from '../../redux/products';
import Label from '../Label';
// import options from '../../options';
import { useEffect, useState } from 'react';
import changingFilterData from '../../lib/changingFilterData';
// const startData = {
//   minPrice: options.minPrice,
//   maxPrice: options.maxPrice,
// };

const MainFilters = () => {
  const dispatch = useDispatch();
  const priceRange = useSelector(productsSelectors.getPriceRange);
  const dataFiltered = useSelector(productsSelectors.getDataFiltered);
  // const startPriceRange =
  //   priceRange[0] === startData.minPrice &&
  //   priceRange[1] === startData.maxPrice;

  const [labelPrice, setLabelPrice] = useState(false);

  const changingFilterPrice = changingFilterData(priceRange);

  useEffect(() => {
    if (!changingFilterPrice) setLabelPrice(true);
  }, [changingFilterPrice]);

  const labelPriceRange = `от ${priceRange[0]} до ${priceRange[1]} руб.`;

  const resetFilteredData = () => {
    dispatch(productsAction.showFilteredData(false));
  };

  const closeLabel = id => {
    if (id === 'price') setLabelPrice(false);
    if (labelPrice) resetFilteredData();
  };

  return (
    <div className={s.box}>
      <h2 className={s.title}>Фильтры:</h2>

      <div className={s.subBox}>
        {dataFiltered && (
          <ul className={s.listLabels}>
            {!changingFilterPrice && labelPrice && (
              <>
                <li className={s.indent}>
                  <Label
                    closeLabel={closeLabel}
                    text={labelPriceRange}
                    id="price"
                  />
                </li>
              </>
            )}
          </ul>
        )}
        <button onClick={resetFilteredData} className={s.btnResetAll}>
          Сбросить все
        </button>
      </div>
    </div>
  );
};

export default MainFilters;

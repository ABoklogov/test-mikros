import s from './MainFilters.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { productsSelectors, productsAction } from '../../redux/products';
import Label from '../Label';
import options from '../../options';
import { useEffect, useState } from 'react';
import changingFilterData from '../../lib/changingFilterData';

const { textPrice, textDimensions, textColors } = options.filtres;

const MainFilters = () => {
  const dispatch = useDispatch();
  const priceRange = useSelector(productsSelectors.getPriceRange);
  const dimensions = useSelector(productsSelectors.getDimensions);
  const dataFiltered = useSelector(productsSelectors.getDataFiltered);
  const colors = useSelector(productsSelectors.getColors);
  const [labelPrice, setLabelPrice] = useState(false);
  // const filterReset = useSelector(productsSelectors.getFilterReset);

  const labelPriceRange = `от ${priceRange[0]} до ${priceRange[1]} руб.`;
  const changingFilterPrice = changingFilterData(textPrice, priceRange);

  useEffect(() => {
    if (dataFiltered) setLabelPrice(true);
    if (changingFilterPrice && dimensions.length === 0 && colors.length === 0)
      resetFilteredData();
  }, [changingFilterPrice, colors.length, dataFiltered, dimensions.length]);

  const resetFilteredData = () => {
    dispatch(productsAction.showFilteredData(false));
    dispatch(productsAction.fixDimensions([]));
    dispatch(productsAction.fixColors([]));
    // dispatch(productsAction.resetFilters(false));
  };

  const closeLabel = text => {
    if (text === labelPriceRange) {
      setLabelPrice(false);
      dispatch(
        productsAction.fixPriceRange([options.minPrice, options.maxPrice]),
      );
      return;
    }
    dimensions.forEach(el => {
      if (el === text) dispatch(productsAction.deleteDimensions(el));
      return;
    });
    colors.forEach(el => {
      if (el === text) dispatch(productsAction.deleteColors(el));
      return;
    });
  };

  return (
    <div className={s.box}>
      <h2 className={s.title}>Фильтры:</h2>

      <div className={s.subBox}>
        <ul className={s.listLabels}>
          {!changingFilterPrice && labelPrice && (
            <li className={s.indent}>
              <Label closeLabel={closeLabel} text={labelPriceRange} />
            </li>
          )}

          <>
            {dimensions.map(el => (
              <li className={s.indent} key={el}>
                <Label
                  closeLabel={closeLabel}
                  text={el}
                  id={textDimensions}
                  measure={options.measure}
                />
              </li>
            ))}
          </>

          <>
            {colors.map(el => (
              <li className={s.indent} key={el}>
                <Label closeLabel={closeLabel} text={el} id={textColors} />
              </li>
            ))}
          </>
        </ul>

        <button onClick={resetFilteredData} className={s.btnResetAll}>
          Сбросить все
        </button>
      </div>
    </div>
  );
};

export default MainFilters;

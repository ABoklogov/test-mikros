import s from './MainFilters.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { productsSelectors, productsAction } from '../../redux/products';
import Label from '../Label';
import options from '../../options';
import { useEffect, useState } from 'react';
import changingFilterData from '../../lib/changingFilterData';
// const startData = {
//   minPrice: options.minPrice,
//   maxPrice: options.maxPrice,
// };
const { textPrice, textDimensions, textColors } = options.filtres;

const MainFilters = () => {
  const dispatch = useDispatch();
  const priceRange = useSelector(productsSelectors.getPriceRange);
  const dimensions = useSelector(productsSelectors.getDimensions);
  const dataFiltered = useSelector(productsSelectors.getDataFiltered);

  const [labelPrice, setLabelPrice] = useState(false);
  const [labelDimensions, setLabelDimensions] = useState(false);

  const labelPriceRange = `от ${priceRange[0]} до ${priceRange[1]} руб.`;
  const changingFilterPrice = changingFilterData(textPrice, priceRange);

  useEffect(() => {
    if (!dataFiltered) setLabelPrice(true);

    if (dimensions.length !== 0) setLabelDimensions(true);
  }, [changingFilterPrice, dataFiltered, dimensions.length]);

  const resetFilteredData = () => {
    dispatch(productsAction.showFilteredData(false));
    // dispatch(productsAction.fixDimensions([]));
  };

  const closeLabel = text => {
    if (text === labelPriceRange) setLabelPrice(false);
    // if (text === textDimensions) setLabelDimensions(false);
    dimensions.forEach(el => {
      if (el === text) {
        console.log(el);
        dispatch(productsAction.deleteDimensions(el));
      }
      // dispatch(productsAction.fixDimensions([]));
    });
    if (labelPrice) resetFilteredData();
    // if (labelDimensions) resetFilteredData();
  };

  return (
    <div className={s.box}>
      <h2 className={s.title}>Фильтры:</h2>

      <div className={s.subBox}>
        {dataFiltered && (
          <ul className={s.listLabels}>
            {!changingFilterPrice && labelPrice && (
              <li className={s.indent}>
                <Label
                  closeLabel={closeLabel}
                  text={labelPriceRange}
                  id={textPrice}
                />
              </li>
            )}
            {/* {dimensions.length !== 0 && ( */}
            <>
              {dimensions.map(el => (
                <li className={s.indent} key={el}>
                  <Label
                    closeLabel={closeLabel}
                    text={el}
                    id={textDimensions}
                  />
                </li>
              ))}
              ,
            </>
            {/* )} */}
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

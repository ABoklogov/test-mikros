import s from './FilterMenu.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productsSelectors, productsAction } from '../../redux/products';
import FilterPrice from '../FilterPrice';
import FilterDimensions from '../FilterDimensions';
import FilterColors from '../FilterColors';
import FilterCollection from '../FilterCollection';
import FilterProductMicros from '../FilterProductMicros';
import FilterNoText from '../FilterNoText';
import Button from '../Button';
import options from '../../options.js';
import changingFilterData from '../../lib/changingFilterData';

const { textPrice, textDimensions, textColors } = options.filtres;
const textShowBtn = options.buttons.show.text;

const FilterMenu = () => {
  const [menuPrice, setMenuPrice] = useState([
    options.minPrice,
    options.maxPrice,
  ]);

  const dispatch = useDispatch();
  const priceRange = useSelector(productsSelectors.getPriceRange);
  const dimensions = useSelector(productsSelectors.getDimensions);

  const changingFilterPrice = changingFilterData(textPrice, priceRange);

  const showFilteredData = () => {
    dispatch(productsAction.showFilteredData(true));
    dispatch(productsAction.fixPriceRange(menuPrice));

    if (dimensions.length !== 0)
      dispatch(productsAction.showFilteredData(true));
  };

  return (
    <div className={s.filterMenuContainer}>
      <div className={s.filterSubBox}>
        <FilterPrice menuPrice={menuPrice} setMenuPrice={setMenuPrice} />
      </div>

      <div className={s.filterSubBox}>
        <FilterDimensions />
      </div>

      <div className={s.filterSubBox}>
        <FilterColors />
      </div>

      <div className={s.filterSubBox}>
        <FilterCollection />
      </div>

      <div className={s.filterSubBox}>
        <FilterProductMicros />
      </div>

      <div className={s.filterSubBox}>
        <FilterNoText />
      </div>

      {/* <div className={s.boxButtons}> */}
      <Button
        onClick={showFilteredData}
        text={textShowBtn}
        className={s.buttonShow}
      />
      {/* <Button
          onClick={resetFilteredData}
          text={textResetBtn}
          className={s.buttonReset}
        /> */}
      {/* </div> */}
    </div>
  );
};

export default FilterMenu;

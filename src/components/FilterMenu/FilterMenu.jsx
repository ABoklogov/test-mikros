import s from './FilterMenu.module.css';
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

const FilterMenu = () => {
  const textShowBtn = options.buttons.show.text;
  // const textResetBtn = options.buttons.reset.text;
  const dispatch = useDispatch();
  const priceRange = useSelector(productsSelectors.getPriceRange);

  const changingFilterPrice = changingFilterData(priceRange);

  const showFilteredData = () => {
    if (!changingFilterPrice) dispatch(productsAction.showFilteredData(true));
  };

  // const resetFilteredData = () => {
  //   dispatch(productsAction.showFilteredData(false));
  // };

  return (
    <div className={s.filterMenuContainer}>
      <div className={s.filterSubBox}>
        <FilterPrice />
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

import s from './FilterMenu.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsAction, productsSelectors } from '../../redux/products';
import FilterPrice from '../FilterPrice';
import FilterDimensions from '../FilterDimensions';
import FilterColors from '../FilterColors';
import FilterCollection from '../FilterCollection';
import FilterProductMicros from '../FilterProductMicros';
import FilterNoText from '../FilterNoText';
import Button from '../Button';
import options from '../../options.js';
import changingFilterData from '../../lib/changingFilterData';
const textShowBtn = options.buttons.show.text;
const { textPrice } = options.filtres;

const FilterMenu = () => {
  const dispatch = useDispatch();
  // const filterReset = useSelector(productsSelectors.getFilterReset);

  const [menuPrice, setMenuPrice] = useState([
    options.minPrice,
    options.maxPrice,
  ]);
  const [menuDimensions, setMenuDimensions] = useState([]);
  const [menuColors, setMenuColors] = useState([]);
  const changingFilterPrice = changingFilterData(textPrice, menuPrice);

  console.log(menuPrice);
  console.log(menuDimensions);
  console.log(menuColors);

  // useEffect(() => {
  //   if (!filterReset) setMenuColors([]);
  // }, [filterReset]);

  const initialState =
    changingFilterPrice &&
    menuDimensions.length === 0 &&
    menuColors.length === 0;

  const showFilteredData = () => {
    if (!initialState) dispatch(productsAction.showFilteredData(true));

    if (!changingFilterPrice) dispatch(productsAction.fixPriceRange(menuPrice));
    if (menuDimensions.length !== 0)
      dispatch(productsAction.fixDimensions(menuDimensions));
    if (menuColors.length !== 0) dispatch(productsAction.fixColors(menuColors));
  };

  return (
    <div className={s.filterMenuContainer}>
      <div className={s.filterSubBox}>
        <FilterPrice menuPrice={menuPrice} setMenuPrice={setMenuPrice} />
      </div>

      <div className={s.filterSubBox}>
        <FilterDimensions
          menuDimensions={menuDimensions}
          setMenuDimensions={setMenuDimensions}
        />
      </div>

      <div className={s.filterSubBox}>
        <FilterColors menuColors={menuColors} setMenuColors={setMenuColors} />
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

      <Button
        onClick={showFilteredData}
        text={textShowBtn}
        className={s.buttonShow}
      />
    </div>
  );
};

export default FilterMenu;

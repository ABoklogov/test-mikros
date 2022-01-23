import s from './FilterMenu.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productsAction } from '../../redux/products';
import FilterPrice from '../FilterPrice';
import FilterDimensions from '../FilterDimensions';
import FilterColors from '../FilterColors';
import FilterCollection from '../FilterCollection';
import FilterProductMicros from '../FilterProductMicros';
import FilterNoText from '../FilterNoText';
import Button from '../Button';
import options from '../../options.js';
const textShowBtn = options.buttons.show.text;

const FilterMenu = () => {
  const dispatch = useDispatch();
  const [menuPrice, setMenuPrice] = useState([
    options.minPrice,
    options.maxPrice,
  ]);
  const [menuDimensions, setMenuDimensions] = useState([]);

  console.log(menuPrice);
  console.log(menuDimensions);

  const showFilteredData = () => {
    dispatch(productsAction.showFilteredData(true));

    dispatch(productsAction.fixPriceRange(menuPrice));
    dispatch(productsAction.fixDimensions(menuDimensions));
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

      <Button
        onClick={showFilteredData}
        text={textShowBtn}
        className={s.buttonShow}
      />
    </div>
  );
};

export default FilterMenu;

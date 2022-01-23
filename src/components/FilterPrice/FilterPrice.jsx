import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { menuSelectors, menuAction } from '../../redux/menu';
import { productsSelectors, productsAction } from '../../redux/products';
import s from './FilterPrice.module.css';
import Slider from '@mui/material/Slider';
import FilterTitle from '../FilterTitle';
import options from '../../options';

const FilterPrice = ({ menuPrice, setMenuPrice }) => {
  // const getPriceRange = useSelector(productsSelectors.getPriceRange);
  const [value, setValue] = useState([menuPrice[0], menuPrice[1]]);

  const getIsOpenMenuPrice = useSelector(menuSelectors.getIsOpenMenuPrice);
  const dataFiltered = useSelector(productsSelectors.getDataFiltered);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataFiltered) {
      setMenuPrice([options.minPrice, options.maxPrice]);

      setValue([options.minPrice, options.maxPrice]);
      dispatch(
        productsAction.fixPriceRange([options.minPrice, options.maxPrice]),
      );
    }
  }, [dataFiltered, dispatch, setMenuPrice]);

  const showMenu = () => {
    getIsOpenMenuPrice
      ? dispatch(menuAction.closeMenuPrice())
      : dispatch(menuAction.openMenuPrice());
  };

  const handleChange = (_, newValue) => {
    setValue(newValue);
    setMenuPrice([newValue[0], newValue[1]]);
  };

  return (
    <div className={s.box}>
      <div className={s.title}>
        <FilterTitle
          title={options.titles[0]}
          showMenu={showMenu}
          getIsOpenMenu={getIsOpenMenuPrice}
        />

        {getIsOpenMenuPrice && <span className={s.titlePrefix}>, ₽:</span>}
      </div>

      {getIsOpenMenuPrice && (
        <div className={s.subBox}>
          <button className={s.buttons}>
            от
            <span>{` ${menuPrice[0]}`}</span>
          </button>

          <button className={s.buttons}>
            до
            <span>{` ${menuPrice[1]}`}</span>
          </button>
          <Slider
            className={s.slider}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={options.minPrice}
            max={options.maxPrice}
          />
        </div>
      )}
    </div>
  );
};

export default FilterPrice;

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { menuSelectors, menuAction } from '../../redux/menu';
import s from './FilterPrice.module.css';
import Slider from '@mui/material/Slider';
import FilterTitle from '../FilterTitle';
import options from '../../options';

const FilterPrice = () => {
  const [startPrice, setStartPrice] = useState(options.minPrice);
  const [lastPrice, setLastPrice] = useState(options.maxPrice);
  const [value, setValue] = useState([startPrice, lastPrice]);

  const getIsOpenMenuPrice = useSelector(menuSelectors.getIsOpenMenuPrice);
  const dispatch = useDispatch();

  const showMenu = () => {
    getIsOpenMenuPrice
      ? dispatch(menuAction.closeMenuPrice())
      : dispatch(menuAction.openMenuPrice());
  };

  const handleChange = (_, newValue) => {
    setValue(newValue);
    setStartPrice(newValue[0]);
    setLastPrice(newValue[1]);
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
            <span>{` ${startPrice}`}</span>
          </button>

          <button className={s.buttons}>
            до
            <span>{` ${lastPrice}`}</span>
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

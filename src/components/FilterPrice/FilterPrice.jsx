import { useState } from 'react';
import s from './FilterPrice.module.css';
import Slider from '@mui/material/Slider';
import FilterTitle from '../FilterTitle';

const FilterPrice = ({ options }) => {
  const [startPrice, setStartPrice] = useState(options.minPrice);
  const [lastPrice, setLastPrice] = useState(options.maxPrice);
  const [value, setValue] = useState([startPrice, lastPrice]);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    setStartPrice(newValue[0]);
    setLastPrice(newValue[1]);
  };

  return (
    <div className={s.box}>
      <FilterTitle title={options.titles[0]} />

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
    </div>
  );
};

export default FilterPrice;

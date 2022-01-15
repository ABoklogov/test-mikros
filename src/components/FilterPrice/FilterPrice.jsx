import { useState } from 'react';
import s from './FilterPrice.module.css';
import arrowMenuFilter from '../../images/icons/arrowMenuFilter.svg';
import Slider from '@mui/material/Slider';

const FilterPrice = () => {
  const minPrice = 200;
  const maxPrice = 10000;

  const [startPrice, setStartPrice] = useState(minPrice);
  const [lastPrice, setLastPrice] = useState(maxPrice);
  const [value, setValue] = useState([startPrice, lastPrice]);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    setStartPrice(newValue[0]);
    setLastPrice(newValue[1]);
  };

  return (
    <div className={s.box}>
      <div className={s.subTitle}>
        <img src={arrowMenuFilter} alt="arrowMenuFilter" />
        <h2 className={s.title}>Цена, &#8381;:</h2>
      </div>

      <div className={s.subBox}>
        <button className={s.buttons}>
          от
          <span>{` ${startPrice}`}</span>
        </button>

        <button className={s.buttons}>
          до
          <span>{` ${lastPrice}`}</span>
        </button>
      </div>
      <Slider
        className={s.slider}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={minPrice}
        max={maxPrice}
      />
    </div>
  );
};

export default FilterPrice;

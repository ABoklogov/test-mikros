import { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { menuSelectors, menuAction } from '../../redux/menu';
import { productsSelectors, productsAction } from '../../redux/products';
import s from './FilterDimensions.module.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FilterTitle from '../FilterTitle';
import options from '../../options';

const FilterDimensions = ({ menuDimensions, setMenuDimensions }) => {
  const getIsOpenMenuDimensions = useSelector(
    menuSelectors.getIsOpenMenuDimensions,
  );
  const dispatch = useDispatch();

  const showMenu = () => {
    getIsOpenMenuDimensions
      ? dispatch(menuAction.closeMenuDimensions())
      : dispatch(menuAction.openMenuDimensions());
  };

  const handleChange = e => {
    const label = e.target.labels[0].innerText;
    if (menuDimensions.includes(label)) {
      setMenuDimensions(oldValues => oldValues.filter(el => el !== label));
      return;
    }
    setMenuDimensions([...menuDimensions, label]);
  };

  return (
    <div className={s.box}>
      <div className={s.title}>
        <FilterTitle
          title={options.titles[1]}
          showMenu={showMenu}
          getIsOpenMenu={getIsOpenMenuDimensions}
        />
        {getIsOpenMenuDimensions && (
          <span className={s.titlePrefix}>, &quot;:</span>
        )}
      </div>

      {getIsOpenMenuDimensions && (
        <div className={s.subBox}>
          {options.dimensions?.map(el => (
            <div className={s.box} key={el}>
              <FormControlLabel
                onChange={handleChange}
                control={
                  <Checkbox
                    sx={{
                      color: '#DDDDDD',
                      '&.Mui-checked': {
                        color: '#0097FF',
                      },
                      '& .MuiSvgIcon-root': {
                        fontSize: 24,
                      },
                    }}
                  />
                }
                label={el}
              />
            </div>
          ))}
          <p className={s.showAll}>Показать все</p>
        </div>
      )}
    </div>
  );
};

export default FilterDimensions;

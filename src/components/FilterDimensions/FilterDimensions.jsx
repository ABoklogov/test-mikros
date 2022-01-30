import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { menuSelectors, menuAction } from '../../redux/menu';
import { productsSelectors } from '../../redux/products';
import s from './FilterDimensions.module.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FilterTitle from '../FilterTitle';
import options from '../../options';

const FilterDimensions = ({ menuDimensions, setMenuDimensions }) => {
  const dispatch = useDispatch();
  const isOpenMenuDimensions = useSelector(
    menuSelectors.getIsOpenMenuDimensions,
  );
  const dataFiltered = useSelector(productsSelectors.getDataFiltered);

  //если фильтры отключены, очищаем массив размеров в локальном стейте:
  useEffect(() => {
    if (!dataFiltered) setMenuDimensions([]);
  }, [dataFiltered, setMenuDimensions]);

  //функция для управления меню:
  const showMenu = () => {
    isOpenMenuDimensions
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

  //функция для управления атрибуда "checked":
  const showChecked = label => (menuDimensions.includes(label) ? true : false);

  return (
    <div className={s.box}>
      <div className={s.title}>
        <FilterTitle
          title={options.titles[1]}
          showMenu={showMenu}
          getIsOpenMenu={isOpenMenuDimensions}
        />
        {isOpenMenuDimensions && (
          <span className={s.titlePrefix}>, &quot;:</span>
        )}
      </div>

      {isOpenMenuDimensions && (
        <div className={s.subBox}>
          {options.dimensions?.map(el => (
            <div className={s.box} key={el}>
              <FormControlLabel
                onChange={handleChange}
                control={
                  <Checkbox
                    checked={showChecked(el)}
                    sx={{
                      color: '#DDDDDD',
                      borderRadius: 5,
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

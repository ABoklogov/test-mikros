import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { menuSelectors, menuAction } from '../../redux/menu';
import { productsSelectors } from '../../redux/products';
import s from './FilterColors.module.css';
import FilterTitle from '../FilterTitle';
import options from '../../options';

const FilterColors = ({ menuColors, setMenuColors }) => {
  const dispatch = useDispatch();
  const dataFiltered = useSelector(productsSelectors.getDataFiltered);
  const getIsOpenMenuColors = useSelector(menuSelectors.getIsOpenMenuColors);

  //если фильтры отключены, очищаем массив цветов в локальном стейте:
  useEffect(() => {
    if (!dataFiltered) setMenuColors([]);
  }, [dataFiltered, setMenuColors]);

  //функция для управления меню:
  const showMenu = () => {
    getIsOpenMenuColors
      ? dispatch(menuAction.closeMenuColors())
      : dispatch(menuAction.openMenuColors());
  };

  const handleChange = e => {
    const label = e.target.labels[0].innerText;
    if (menuColors.includes(label)) {
      setMenuColors(oldValues => oldValues.filter(el => el !== label));
      return;
    }
    setMenuColors([...menuColors, label]);
  };

  //функция для управления атрибуда "checked":
  const showChecked = label => (menuColors.includes(label) ? 'checked' : '');

  return (
    <div className={s.box}>
      <div className={s.title}>
        <FilterTitle
          title={options.titles[2]}
          showMenu={showMenu}
          getIsOpenMenu={getIsOpenMenuColors}
        />
        {getIsOpenMenuColors && <span className={s.titlePrefix}>:</span>}
      </div>

      {getIsOpenMenuColors && (
        <div className={s.subBox}>
          <ul className={s.box}>
            {options.colors?.map(({ color, label }) => (
              <li className={s.itemColor} key={color}>
                <label>
                  <input
                    onChange={handleChange}
                    className={s.checkbox}
                    type="checkbox"
                    value={label}
                    checked={showChecked(label)}
                  />
                  <span
                    className={s.icon}
                    style={
                      color === '#FFFFFF'
                        ? {
                            border: '1px solid #A8A8A8',
                            boxSizing: 'border-box',
                            backgroundColor: `${color}`,
                          }
                        : { backgroundColor: `${color}` }
                    }
                  ></span>
                  {label}
                </label>
              </li>
            ))}
          </ul>
          <p className={s.showAll}>Показать все</p>
        </div>
      )}
    </div>
  );
};

export default FilterColors;

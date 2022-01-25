import { useSelector, useDispatch } from 'react-redux';
import { menuSelectors, menuAction } from '../../redux/menu';
import s from './FilterColors.module.css';
import FilterTitle from '../FilterTitle';
import options from '../../options';

const FilterColors = () => {
  const getIsOpenMenuColors = useSelector(menuSelectors.getIsOpenMenuColors);
  const dispatch = useDispatch();

  const showMenu = () => {
    getIsOpenMenuColors
      ? dispatch(menuAction.closeMenuColors())
      : dispatch(menuAction.openMenuColors());
  };

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
                  <input className={s.checkbox} type="checkbox" value={label} />
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

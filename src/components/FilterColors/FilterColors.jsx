import { useSelector, useDispatch } from 'react-redux';
import { menuSelectors, menuAction } from '../../redux/menu';
import s from './FilterColors.module.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
      <FilterTitle
        title={options.titles[2]}
        showMenu={showMenu}
        getIsOpenMenu={getIsOpenMenuColors}
      />

      {getIsOpenMenuColors && (
        <div>
          {options.colors?.map(({ color, label }) => (
            <div className={s.box} key={color}>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: `${color}`,
                      '&.Mui-checked': {
                        color: `${color}`,
                      },
                      '& .MuiSvgIcon-root': { fontSize: 20 },
                    }}
                  />
                }
                label={label}
              />
            </div>
          ))}
          <p className={s.showAll}>Показать все</p>
        </div>
      )}
    </div>
  );
};

export default FilterColors;

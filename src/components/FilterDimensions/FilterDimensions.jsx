import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { menuSelectors, menuAction } from '../../redux/menu';
import { productsSelectors, productsAction } from '../../redux/products';
import s from './FilterDimensions.module.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FilterTitle from '../FilterTitle';
import options from '../../options';

const FilterDimensions = () => {
  const getIsOpenMenuDimensions = useSelector(
    menuSelectors.getIsOpenMenuDimensions,
  );
  const dataFiltered = useSelector(productsSelectors.getDataFiltered);
  const dispatch = useDispatch();
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (!dataFiltered) dispatch(productsAction.fixDimensions(values));
  }, [dataFiltered, dispatch, values]);

  const showMenu = () => {
    getIsOpenMenuDimensions
      ? dispatch(menuAction.closeMenuDimensions())
      : dispatch(menuAction.openMenuDimensions());
  };

  const handleChange = e => {
    const label = e.target.labels[0].innerText;
    if (values.includes(label)) {
      setValues(oldValues => oldValues.filter(el => el !== label));
      return;
    }
    setValues([...values, label]);
  };
  // console.log(values);

  return (
    <div className={s.box}>
      <div className={s.title}>
        <FilterTitle
          title={options.titles[1]}
          showMenu={showMenu}
          getIsOpenMenu={getIsOpenMenuDimensions}
        />
        {getIsOpenMenuDimensions && (
          <span className={s.titlePrefix}>, см:</span>
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

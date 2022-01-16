// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { menuSelectors, menuAction } from '../../redux/menu';
import s from './FilterDimensions.module.css';
import FilterTitle from '../FilterTitle';
import options from '../../options';

const FilterDimensions = () => {
  const getIsOpenMenuDimensions = useSelector(
    menuSelectors.getIsOpenMenuDimensions,
  );
  const dispatch = useDispatch();

  const showMenu = () => {
    getIsOpenMenuDimensions
      ? dispatch(menuAction.closeMenuDimensions())
      : dispatch(menuAction.openMenuDimensions());
  };

  return (
    <div className={s.box}>
      <FilterTitle
        title={options.titles[1]}
        showMenu={showMenu}
        getIsOpenMenu={getIsOpenMenuDimensions}
      />
    </div>
  );
};

export default FilterDimensions;

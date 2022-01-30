import { useSelector, useDispatch } from 'react-redux';
import { menuSelectors, menuAction } from '../../redux/menu';
// import s from './FilterProductMicros.module.css';
import FilterTitle from '../FilterTitle';
import options from '../../options';

const FilterProductMicros = () => {
  const dispatch = useDispatch();
  const getIsOpenMenuProductMicros = useSelector(
    menuSelectors.getIsOpenMenuProductMicros,
  );

  //функция для управления меню:
  const showMenu = () => {
    getIsOpenMenuProductMicros
      ? dispatch(menuAction.closeMenuProductMicros())
      : dispatch(menuAction.openMenuProductMicros());
  };

  return (
    <div>
      <FilterTitle
        title={options.titles[4]}
        showMenu={showMenu}
        getIsOpenMenu={getIsOpenMenuProductMicros}
      />
    </div>
  );
};

export default FilterProductMicros;

import { useSelector, useDispatch } from 'react-redux';
import { menuSelectors, menuAction } from '../../redux/menu';
// import s from './FilterNoText.module.css';
import FilterTitle from '../FilterTitle';
import options from '../../options';

const FilterNoText = () => {
  const getIsOpenMenuNoText = useSelector(menuSelectors.getIsOpenMenuNoText);
  const dispatch = useDispatch();

  //функция для управления меню:
  const showMenu = () => {
    getIsOpenMenuNoText
      ? dispatch(menuAction.closeMenuNoText())
      : dispatch(menuAction.openMenuNoText());
  };

  return (
    <div>
      <FilterTitle
        title={options.titles[5]}
        showMenu={showMenu}
        getIsOpenMenu={getIsOpenMenuNoText}
      />
    </div>
  );
};

export default FilterNoText;

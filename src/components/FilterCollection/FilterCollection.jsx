import { useSelector, useDispatch } from 'react-redux';
import { menuSelectors, menuAction } from '../../redux/menu';
// import s from './FilterCollection.module.css';
import FilterTitle from '../FilterTitle';
import options from '../../options';

const FilterCollection = () => {
  const getIsOpenMenuCollection = useSelector(
    menuSelectors.getIsOpenMenuCollection,
  );
  const dispatch = useDispatch();

  //функция для управления меню:
  const showMenu = () => {
    getIsOpenMenuCollection
      ? dispatch(menuAction.closeMenuCollection())
      : dispatch(menuAction.openMenuCollection());
  };

  return (
    <div>
      <FilterTitle
        title={options.titles[3]}
        showMenu={showMenu}
        getIsOpenMenu={getIsOpenMenuCollection}
      />
    </div>
  );
};

export default FilterCollection;

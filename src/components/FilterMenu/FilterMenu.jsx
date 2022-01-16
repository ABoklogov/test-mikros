import s from './FilterMenu.module.css';
import FilterPrice from '../FilterPrice';
import FilterDimensions from '../FilterDimensions';

const FilterMenu = () => {
  return (
    <div className={s.filterMenuContainer}>
      <div className={s.filterSubBox}>
        <FilterPrice />
      </div>

      <div className={s.filterSubBox}>
        <FilterDimensions />
      </div>
    </div>
  );
};

export default FilterMenu;

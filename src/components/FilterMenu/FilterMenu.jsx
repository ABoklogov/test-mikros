import s from './FilterMenu.module.css';
import FilterPrice from '../FilterPrice';
import FilterDimensions from '../FilterDimensions';
import FilterColors from '../FilterColors';

const FilterMenu = () => {
  return (
    <div className={s.filterMenuContainer}>
      <div className={s.filterSubBox}>
        <FilterPrice />
      </div>

      <div className={s.filterSubBox}>
        <FilterDimensions />
      </div>

      <div>
        <FilterColors className={s.filterSubBox} />
      </div>
    </div>
  );
};

export default FilterMenu;

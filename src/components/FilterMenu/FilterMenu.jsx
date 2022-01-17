import s from './FilterMenu.module.css';
import FilterPrice from '../FilterPrice';
import FilterDimensions from '../FilterDimensions';
import FilterColors from '../FilterColors';
import FilterCollection from '../FilterCollection';
import FilterProductMicros from '../FilterProductMicros';
import FilterNoText from '../FilterNoText';

const FilterMenu = () => {
  return (
    <div className={s.filterMenuContainer}>
      <div className={s.filterSubBox}>
        <FilterPrice />
      </div>

      <div className={s.filterSubBox}>
        <FilterDimensions />
      </div>

      <div className={s.filterSubBox}>
        <FilterColors />
      </div>

      <div className={s.filterSubBox}>
        <FilterCollection />
      </div>

      <div className={s.filterSubBox}>
        <FilterProductMicros />
      </div>

      <div className={s.filterSubBox}>
        <FilterNoText />
      </div>
    </div>
  );
};

export default FilterMenu;

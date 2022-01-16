import s from './FilterDimensions.module.css';
import FilterTitle from '../FilterTitle';

const FilterDimensions = ({ options }) => {
  return (
    <div className={s.box}>
      <FilterTitle title={options.titles[1]} />
    </div>
  );
};

export default FilterDimensions;

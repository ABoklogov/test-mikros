import s from './FilterTitle.module.css';
import arrowMenuFilter from '../../images/icons/arrowMenuFilter.svg';

const FilterTitle = ({ title, showMenu, getIsOpenMenu }) => {
  return (
    <div className={s.subTitle} onClick={showMenu}>
      <img
        className={getIsOpenMenu ? `${s.arrowUp}` : `${s.arrowDown}`}
        src={arrowMenuFilter}
        alt="arrowMenuFilter"
      />
      <h2 className={s.title}>{`${title}`}</h2>
    </div>
  );
};

export default FilterTitle;

import s from './FilterMenu.module.css';

const FilterMenu = ({ children }) => {
  return <div className={s.filterMenuContainer}>{children}</div>;
};

export default FilterMenu;

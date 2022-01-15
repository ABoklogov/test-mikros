import { useState } from 'react';
import s from './FilterTitle.module.css';
import arrowMenuFilter from '../../images/icons/arrowMenuFilter.svg';

const FilterTitle = ({ title }) => {
  const [isHidden, setIsHidden] = useState(true);

  const showMenu = () => {
    isHidden ? setIsHidden(false) : setIsHidden(true);
  };

  return (
    <div className={s.subTitle} onClick={showMenu}>
      <img className={s.img} src={arrowMenuFilter} alt="arrowMenuFilter" />
      <h2 className={s.title}>{`${title}:`}</h2>
    </div>
  );
};

export default FilterTitle;

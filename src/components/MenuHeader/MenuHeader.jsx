import s from './MenuHeader.module.css';
import logo from '../../images/icons/logo.svg';
import Button from '../Button';

const MenuHeader = () => {
  return (
    <div className={s.box}>
      <a href="#" className={s.logo}>
        <img src={logo} alt="logo" />
      </a>
      <div className={s.subMenuLeft}>
        <p className={s.title}>Крупнейший выбор товаров для праздника</p>
        <p className={s.subTitle}>Оптовый интернет - магазин</p>
        <Button />
      </div>
      <div className={s.subMenuRight}></div>
    </div>
  );
};

export default MenuHeader;

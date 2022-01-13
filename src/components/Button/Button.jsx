import s from './Button.module.css';
import iconKatalog from '../../images/icons/catalog.svg';

const Button = () => {
  return (
    <button className={s.button}>
      <img className={s.iconKatalog} src={iconKatalog} alt="icon -katalog" />
      <span className={s.buttonText}>каталог</span>
    </button>
  );
};

export default Button;

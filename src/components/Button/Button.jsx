import s from './Button.module.css';

const Button = ({ text, alt, icon, className = '', onClick }) => {
  return (
    <button onClick={onClick} className={`${s.button} ${className}`}>
      {icon && <img className={s.iconKatalog} src={icon} alt={alt} />}
      <span className={s.buttonText}>{text}</span>
    </button>
  );
};

export default Button;

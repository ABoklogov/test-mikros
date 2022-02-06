import s from './Button.module.css';

const Button = ({
  text,
  alt,
  icon,
  className = '',
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${s.button} ${className}`}
      disabled={disabled}
      style={
        disabled && text === 'показать'
          ? { backgroundColor: '#a8a8a8', borderColor: '#a8a8a8' }
          : {}
      }
    >
      {icon && <img className={s.iconKatalog} src={icon} alt={alt} />}
      <span className={s.buttonText}>{text}</span>
    </button>
  );
};

export default Button;

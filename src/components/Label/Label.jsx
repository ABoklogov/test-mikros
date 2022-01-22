import s from './Label.module.css';
// import { useDispatch } from 'react-redux';
// import { productsAction } from '../../redux/products';
import labelClose from '../../images/icons/labelClose.svg';

const Label = ({ text, closeLabel, id }) => {
  return (
    <div className={s.label}>
      <span className={s.textLabel}>{text}</span>
      <img onClick={() => closeLabel(id)} src={labelClose} alt="labelClose" />
    </div>
  );
};

export default Label;

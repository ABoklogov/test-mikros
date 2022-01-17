import s from './Label.module.css';
import labelClose from '../../images/icons/labelClose.svg';

const Label = () => {
  return (
    <div className={s.label}>
      <span className={s.textLabel}>label</span>
      <img src={labelClose} alt="labelClose" />
    </div>
  );
};

export default Label;

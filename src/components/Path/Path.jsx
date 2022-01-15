import s from './Path.module.css';
import arrow from '../../images/icons/arrow.svg';
import arrowBottom from '../../images/icons/arrowBottom.svg';

const Path = () => {
  return (
    <div className={s.pathBox}>
      <p className={s.folder}>Главная</p>
      <img src={arrow} alt="arrow" />

      <p className={s.folder}>Праздники</p>
      <img src={arrow} alt="arrow" />

      <p className={s.folder}>День рождения</p>
      <img src={arrow} alt="arrow" />

      <p className={`${s.folder} ${s.active}`}>Полиграфия</p>
      <img src={arrowBottom} alt="arrowBottom" />
    </div>
  );
};

export default Path;

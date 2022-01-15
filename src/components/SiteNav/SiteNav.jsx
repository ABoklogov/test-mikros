import s from './SiteNav.module.css';
import marker from '../../images/icons/marker.svg';

const SiteNav = () => {
  return (
    <div className={s.box}>
      <img className={s.icon} src={marker} alt="marker" />

      <a href="#" className={`${s.link} ${s.item} ${s.textMarker}`}>
        Воронеж
      </a>

      <ul className={s.linkList}>
        <li className={s.item}>
          <a href="#" className={s.link}>
            Новости
          </a>
        </li>
        <li className={s.item}>
          <a href="#" className={s.link}>
            Контакты
          </a>
        </li>
        <li className={s.item}>
          <a href="#" className={s.link}>
            Условия работы
          </a>
        </li>
        <li className={s.item}>
          <a href="#" className={s.link}>
            Доставка
          </a>
        </li>
        <li className={s.item}>
          <a href="#" className={s.link}>
            Оставить отзыв
          </a>
        </li>
      </ul>

      <p className={`${s.link} ${s.workingHours} ${s.item}`}>
        Пн - Пт: 08:00 - 17:00
      </p>
    </div>
  );
};

export default SiteNav;

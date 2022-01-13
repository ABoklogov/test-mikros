import s from './SiteNav.module.css';

const SiteNav = () => {
  return (
    <div className={s.box}>
      <svg
        className={s.icon}
        width="35"
        height="35"
        viewBox="0 0 25 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 31.0833C12.5 31.0833 23.4375 22.3333 23.4375 12.8541C23.4375 6.81349 18.5406 1.91663 12.5 1.91663C6.45936 1.91663 1.5625 6.81349 1.5625 12.8541C1.5625 22.3333 12.5 31.0833 12.5 31.0833Z"
          stroke="#A8A8A8"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
      <a href="#" className={`${s.link} ${s.item} ${s.textMarker}`}>
        Воронеж
      </a>
      <ul className={s.linkList}>
        {/* <li className={s.item}>
          <a href="#" className={s.link}>
            Воронеж
          </a>
        </li> */}
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
        {/* <li className={s.item}>
          <p className={`${s.link} ${s.workingHours}`}>
            Пн - Пт: 08:00 - 17:00
          </p>
        </li> */}
      </ul>

      <p className={`${s.link} ${s.workingHours} ${s.item}`}>
        Пн - Пт: 08:00 - 17:00
      </p>
    </div>
  );
};

export default SiteNav;

import s from './Footer.module.css';

const Footer = () => {
  return (
    <div className={s.box}>
      <div className={s.boxLinks}>
        <div className={s.subBox}>
          <h3 className={s.title}>Контакты</h3>
          <ul className={s.list}>
            <li>
              <a className={s.link} href="#">
                Адреса магазинов
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Отдел продаж
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Отдел по работе с сетями
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Отдел закупок
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Бухгалтерия
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Руководство
              </a>
            </li>
          </ul>
        </div>

        <div className={s.subBox}>
          <h3 className={s.title}>Условия работы</h3>
          <ul className={s.list}>
            <li>
              <a className={s.link} href="#">
                Как сделать заказ
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Оплата
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Оплатить
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Доставка
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Система скидок
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Документы
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Реквизиты
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Обмен и возврат
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Частые вопросы
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Обмен и возврат
              </a>
            </li>
          </ul>
        </div>

        <div className={s.subBox}>
          <h3 className={s.title}>Обучение</h3>
          <ul className={s.list}>
            <li>
              <a className={s.link} href="#">
                Для сотрудников
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Статьи
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Видеоуроки
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Семинары
              </a>
            </li>
          </ul>
        </div>

        <div className={s.subBox}>
          <h3 className={s.title}>О компании</h3>
          <ul className={s.list}>
            <li>
              <a className={s.link} href="#">
                Новости
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Награды
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Благотворительность
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Вакансии
              </a>
            </li>
            <li>
              <a className={s.link} href="#">
                Политика конфидециальности
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={s.boxInfo}>
        <p className={s.infoText}>
          <span className={s.infoTextTop}>
            © 1994-2021 ООО НПП «МИКРОС», сеть магазинов товаров для праздника
          </span>
          <span>
            Вся информация на сайте – собственность интернет-магазина Микрос.рф.
            Все данные, представленные на сайте, носят сугубо информационный
            характер. Для более подробной информации следует обращаться к
            менеджерам компании по указанным на сайте телефонам. Информация на
            сайте микрос.рф не является публичной офертой.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

import s from './MainFilters.module.css';
import Label from '../Label';

const MainFilters = () => {
  return (
    <>
      <h2 className={s.title}>Фильтры:</h2>

      <div className={s.subBox}>
        <ul className={s.listLabels}>
          <li className={s.indent}>
            <Label />
          </li>
          <li className={s.indent}>
            <Label />
          </li>
          <li className={s.indent}>
            <Label />
          </li>
        </ul>

        <button className={s.btnResetAll}>Сбросить все</button>
      </div>
    </>
  );
};

export default MainFilters;

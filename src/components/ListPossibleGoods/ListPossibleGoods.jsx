import s from './ListPossibleGoods.module.css';

const ListPossibleGoods = () => {
  return (
    <div className={s.box}>
      <button className={s.buttons}>Открытки</button>
      <button className={s.buttons}>Конверты для денег</button>
      <button className={s.buttons}>Приглашения</button>
      <button className={s.buttons}>Плакаты, гирлянды</button>
    </div>
  );
};

export default ListPossibleGoods;

import s from './Title.module.css';

const Title = () => {
  return (
    <div className={s.box}>
      <h1 className={s.title}>Полиграфия ко дню рождения</h1>
      <p className={s.numberGoods}>(1300 товаров)</p>
    </div>
  );
};

export default Title;

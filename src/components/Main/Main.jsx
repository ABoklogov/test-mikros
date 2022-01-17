import s from './Main.module.css';
import MainFilters from '../MainFilters';
import MainSettings from '../MainSettings';
import ProductList from '../ProductList';

const Main = () => {
  return (
    <div className={s.box}>
      <div className={s.indent}>
        <MainFilters />
      </div>

      <div className={s.indent}>
        <MainSettings />
      </div>

      <div className={s.border}></div>
      <ProductList />
    </div>
  );
};

export default Main;

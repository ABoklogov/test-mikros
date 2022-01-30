import s from './Main.module.css';
import MainFilters from '../MainFilters';
import MainSettings from '../MainSettings';
import ProductList from '../ProductList';
import Pagination from '../Pagination';

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

      <div className={s.pagination}>
        <Pagination />
      </div>
    </div>
  );
};

export default Main;

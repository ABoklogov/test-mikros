import s from './Main.module.css';
// import { useSelector } from 'react-redux';
// import { productsSelectors } from '../../redux/products';
import MainFilters from '../MainFilters';
import MainSettings from '../MainSettings';
import ProductList from '../ProductList';

const Main = () => {
  // const dataFiltered = useSelector(productsSelectors.getDataFiltered);

  return (
    <div className={s.box}>
      <div className={s.indent}>
        <MainFilters />
      </div>

      <div
        className={s.indent}
        // style={!dataFiltered ? { marginTop: 104 } : { marginTop: 0 }}
      >
        <MainSettings />
      </div>

      <div className={s.border}></div>
      <ProductList />
    </div>
  );
};

export default Main;

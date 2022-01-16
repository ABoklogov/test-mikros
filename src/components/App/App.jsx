import s from './App.module.css';
import Container from '../Container';
import Header from '../Header';
import Path from '../Path';
import Title from '../Title';
import ListPossibleGoods from '../ListPossibleGoods';
import FilterMenu from '../FilterMenu';
import ProductList from '../ProductList';

function App() {
  return (
    <Container>
      <Header />
      <div className={s.path}>
        <Path />
      </div>

      <div className={s.title}>
        <Title />
      </div>

      <div className={s.listPossibleGoods}>
        <ListPossibleGoods />
      </div>

      <FilterMenu />
      <ProductList />
    </Container>
  );
}

export default App;

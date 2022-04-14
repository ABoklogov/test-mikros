import { useState } from 'react';
import s from './App.module.css';
import TopPost from '../TopPost';
import Container from '../Container';
import Header from '../Header';
import Path from '../Path';
import Title from '../Title';
import ListPossibleGoods from '../ListPossibleGoods';
import FilterMenu from '../FilterMenu';
import Main from '../Main';
import Footer from '../Footer';

function App() {
  const [topPost, setTopPost] = useState(true);

  return (
    <>
      {topPost && <TopPost setTopPost={setTopPost} />}
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

        <div className={s.body}>
          <FilterMenu />
          <Main />
        </div>
      </Container>

      <div className={s.strip}> </div>

      <Container>
        <div className={s.footer}>
          <Footer />
        </div>
      </Container>
    </>
  );
}

export default App;

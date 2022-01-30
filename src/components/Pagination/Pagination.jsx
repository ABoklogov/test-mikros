import { useState, useEffect } from 'react';
import s from './Pagination.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { productsSelectors, productsAction } from '../../redux/products';

const Pagination = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelectors.getListProduct);
  const displayBy = useSelector(productsSelectors.getDisplayBy);
  // количество элементов на странице:
  const productPerPage = Number(displayBy);
  // всего страниц:
  const pages = Math.ceil(products.length / productPerPage);
  //текущая страница:
  const [currentPage, setCurrentPage] = useState(1);
  //последний индекс массива:
  const lastProductsIndex = currentPage * productPerPage;
  //первый индекс массива:
  const firstProductsIndex = lastProductsIndex - productPerPage;
  //обрезаем массив:
  const currentProducts = products.slice(firstProductsIndex, lastProductsIndex);
  //отправляем в глобальный стейт обрезанный массив:
  useEffect(() => {
    dispatch(productsAction.fetchFilteredProducts(currentProducts));
  }, [currentProducts, dispatch]);

  const pageBack = () => {
    if (currentPage <= 1) return;
    setCurrentPage(oldPage => oldPage - 1);
  };

  const pageForward = () => {
    if (currentPage >= pages) return;
    setCurrentPage(oldPage => oldPage + 1);
  };

  const hendleChange = e => {
    setCurrentPage(e.target.value);
  };

  return (
    <div className={s.box}>
      <div className={s.leftBox}>
        <h3 className={s.title}>Внимание!</h3>
        <p className={s.text}>
          Оптовые цены на сайте действуют при покупке от 3000 руб.
        </p>
      </div>

      <div className={s.rightBox}>
        <span className={`${s.text} ${s.pageText}`}>Страница</span>
        <input
          className={s.input}
          onChange={hendleChange}
          type="text"
          value={currentPage}
        />
        <span className={`${s.text} ${s.pageText}`}>из {pages}</span>

        <svg
          className={`${s.backArrow} ${s.arrow}`}
          onClick={pageBack}
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.33331 2.16679L8.66665 6.50012L4.33331 10.8335"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={
              currentPage === 1 ? { stroke: '#A8A8A8' } : { stroke: '#0097FF' }
            }
          />
        </svg>

        <svg
          onClick={pageForward}
          className={`${s.forwardArrow} ${s.arrow}`}
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.33331 2.16679L8.66665 6.50012L4.33331 10.8335"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={
              currentPage === pages
                ? { stroke: '#A8A8A8' }
                : { stroke: '#0097FF' }
            }
          />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;

import { useState, useEffect } from 'react';
import s from './Pagination.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { productsSelectors, productsAction } from '../../redux/products';
import arrowPagination from '../../images/icons/arrowPagination.svg';

const Pagination = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelectors.getListProduct);
  const displayBy = useSelector(productsSelectors.getDisplayBy);
  // const productPerPage = Number(displayBy);

  // const pages = Math.ceil(products.length / productPerPage);
  const pages = Math.ceil(products.length / 2);
  const [currentPage, setCurrentPage] = useState(1);

  const productPerPage = 2;
  const lastProductsIndex = currentPage * productPerPage;
  const firstProductsIndex = lastProductsIndex - productPerPage;
  const currentProducts = products.slice(firstProductsIndex, lastProductsIndex);

  useEffect(() => {
    dispatch(productsAction.fetchFilteredProducts(currentProducts));
  }, [currentProducts, dispatch]);

  const pageBack = () => {
    setCurrentPage(oldPage => oldPage - 1);
  };

  const pageForward = () => {
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

        <img
          onClick={pageBack}
          className={`${s.backArrow} ${s.arrow}`}
          src={arrowPagination}
          alt="back-arrow"
          style={currentPage === 1 && { color: '#A8A8A8' }}
        />
        <img
          onClick={pageForward}
          className={`${s.forwardArrow} ${s.arrow}`}
          src={arrowPagination}
          alt="forward-arrow"
        />
      </div>
    </div>
  );
};

export default Pagination;

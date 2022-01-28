import { useState } from 'react';
import s from './Pagination.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { productsSelectors, productsAction } from '../../redux/products';

const Pagination = () => {
  // const products = useSelector(productsSelectors.getTotalProductsFound);
  // const displayBy = useSelector(productsSelectors.getDisplayBy);
  // const pages = products / Number(displayBy);
  // const [totalPages, setTotalPages] = useState(pages);

  // console.log(products);
  // console.log(totalPages);

  return (
    <>
      <h3 className={s.title}>Внимание!</h3>
      <p className={s.text}>
        Оптовые цены на сайте действуют при покупке от 3000 руб.
      </p>

      <span>Страница</span>
      <input type="text" />
      {/* <span>из {totalPages}</span> */}
    </>
  );
};

export default Pagination;

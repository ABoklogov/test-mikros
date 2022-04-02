import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  productsSelectors,
  productsOperations,
  productsAction,
} from '../../redux/products';
import styleGrid from './ProductList.module.css';
import styleLine from './ProductListLine.module.css';
import ProductItem from '../ProductItem';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelectors.getListProduct);
  const sortOrder = useSelector(productsSelectors.getSortOrder);
  const displayBy = useSelector(productsSelectors.getDisplayBy);
  const dataFiltered = useSelector(productsSelectors.getDataFiltered);
  const priceRange = useSelector(productsSelectors.getPriceRange);
  const dimensions = useSelector(productsSelectors.getDimensions);
  const colors = useSelector(productsSelectors.getColors);
  const filteredProducts = useSelector(productsSelectors.getFilteredProducts);
  const productDisplayGrid = useSelector(productsSelectors.getProductsLocation);

  //загружаем полный массив товаров и фильтруем по алфавиту/цене:
  useEffect(() => {
    if (!dataFiltered) dispatch(productsOperations.fetchProducts());

    if (sortOrder === 'алфавиту')
      dispatch(productsAction.alphabeticalSorting());

    if (sortOrder === 'цене') dispatch(productsAction.priceSorting());

    if (sortOrder === 'base') dispatch(productsOperations.fetchProducts());

    if (dataFiltered)
      dispatch(productsAction.showProductsFilteredPrice(priceRange));

    if (dataFiltered && dimensions.length !== 0)
      dispatch(productsAction.showProductsFilteredDimensions(dimensions));

    if (dataFiltered && colors.length !== 0)
      dispatch(productsAction.showProductsFilteredColors(colors));
  }, [colors, dataFiltered, dimensions, dispatch, priceRange, sortOrder]);

  //отфильтрованные товары обрезаем по 20/40/60 штук
  useEffect(() => {
    dispatch(productsAction.fetchFilteredProducts(products));

    if (displayBy === '20') dispatch(productsAction.displayBy20());

    if (displayBy === '40') dispatch(productsAction.displayBy40());

    if (displayBy === '60') dispatch(productsAction.displayBy60());
  }, [dispatch, displayBy, products]);

  return (
    <ul className={productDisplayGrid ? styleGrid.box : styleLine.box}>
      {filteredProducts?.map(({ _id, _source }) => (
        <li
          className={
            productDisplayGrid ? styleGrid.productItem : styleLine.productItem
          }
          key={_id}
        >
          <ProductItem source={_source} id={_id} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;

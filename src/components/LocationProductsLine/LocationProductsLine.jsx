import { useSelector } from 'react-redux';
import { productsSelectors } from '../../redux/products';

const LocationProductsLine = ({ locationProductsLine }) => {
  const productDisplayGrid = useSelector(productsSelectors.getProductsLocation);

  return (
    <svg
      onClick={locationProductsLine}
      fill={productDisplayGrid ? '#DDD' : '#0097FF'}
      width="39"
      height="39"
      viewBox="0 0 39 39"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="39" height="11" rx="2" fill="inherit" />
      <rect y="14" width="39" height="11" rx="2" fill="inherit" />
      <rect y="28" width="39" height="11" rx="2" fill="inherit" />
    </svg>
  );
};

export default LocationProductsLine;

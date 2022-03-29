import { useSelector } from 'react-redux';
import { productsSelectors } from '../../redux/products';

const LocationProductsGrid = ({ locationProductsGrid }) => {
  const productDisplayGrid = useSelector(productsSelectors.getProductsLocation);

  return (
    <svg
      onClick={locationProductsGrid}
      fill={productDisplayGrid ? '#0097FF' : '#DDD'}
      width="38"
      height="39"
      viewBox="0 0 38 39"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="13.8182"
        width="10.3636"
        height="11.2667"
        rx="2"
        fill="inherit"
      />
      <rect
        x="13.8182"
        y="13.8667"
        width="10.3636"
        height="11.2667"
        rx="2"
        fill="inherit"
      />
      <rect
        x="13.8182"
        y="27.7334"
        width="10.3636"
        height="11.2667"
        rx="2"
        fill="inherit"
      />
      <rect
        x="27.6364"
        width="10.3636"
        height="11.2667"
        rx="2"
        fill="inherit"
      />
      <rect
        x="27.6364"
        y="13.8667"
        width="10.3636"
        height="11.2667"
        rx="2"
        fill="inherit"
      />
      <rect
        x="27.6364"
        y="27.7334"
        width="10.3636"
        height="11.2667"
        rx="2"
        fill="inherit"
      />
      <rect width="10.3636" height="11.2667" rx="2" fill="inherit" />
      <rect
        y="13.8667"
        width="10.3636"
        height="11.2667"
        rx="2"
        fill="inherit"
      />
      <rect
        y="27.7333"
        width="10.3636"
        height="11.2667"
        rx="2"
        fill="inherit"
      />
    </svg>
  );
};

export default LocationProductsGrid;

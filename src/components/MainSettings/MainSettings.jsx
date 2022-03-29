import { useDispatch } from 'react-redux';
import { productsAction } from '../../redux/products';
import s from './MainSettings.module.css';
import SortMenu from '../SortMenu';
import LocationProductsGrid from '../LocationProductsGrid';
import LocationProductsLine from '../LocationProductsLine';
import options from '../../options';

const MainSettings = () => {
  const dispatch = useDispatch();
  const textMenuSort = options.sortMenu.textMenu[0];
  const textItemsSort = options.sortMenu.menuItem.sort;
  const textMenuDisplay = options.sortMenu.textMenu[1];
  const textItemsDisplay = options.sortMenu.menuItem.display;

  const locationProductsGrid = () => {
    dispatch(productsAction.changeLocationProducts(true));
  };
  const locationProductsLine = () => {
    dispatch(productsAction.changeLocationProducts(false));
  };

  return (
    <div className={s.subBox}>
      <SortMenu textMenu={textMenuSort} textItems={textItemsSort} />
      <SortMenu textMenu={textMenuDisplay} textItems={textItemsDisplay} />

      <div className={s.locationItems}>
        <LocationProductsGrid locationProductsGrid={locationProductsGrid} />
        <LocationProductsLine locationProductsLine={locationProductsLine} />
      </div>
    </div>
  );
};

export default MainSettings;

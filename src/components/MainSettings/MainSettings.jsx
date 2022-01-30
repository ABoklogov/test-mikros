import s from './MainSettings.module.css';
import SortMenu from '../SortMenu';
import locationNet from '../../images/icons/locationNet.svg';
import locationNext from '../../images/icons/locationNext.svg';
import options from '../../options';

const MainSettings = () => {
  const textMenuSort = options.sortMenu.textMenu[0];
  const textItemsSort = options.sortMenu.menuItem.sort;
  const textMenuDisplay = options.sortMenu.textMenu[1];
  const textItemsDisplay = options.sortMenu.menuItem.display;

  return (
    <div className={s.subBox}>
      <SortMenu textMenu={textMenuSort} textItems={textItemsSort} />
      <SortMenu textMenu={textMenuDisplay} textItems={textItemsDisplay} />

      <div className={s.locationItems}>
        <img src={locationNet} alt="locationNet" />
        <img src={locationNext} alt="locationNext" />
      </div>
    </div>
  );
};

export default MainSettings;

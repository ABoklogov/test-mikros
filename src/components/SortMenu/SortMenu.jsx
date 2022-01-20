import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productsSelectors, productsAction } from '../../redux/products';
import s from './SortMenu.module.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import arrowMenuFilter from '../../images/icons/arrowMenuFilter.svg';

const SortMenu = ({ textMenu, textItems }) => {
  const dispatch = useDispatch();
  const displayBy = useSelector(productsSelectors.getDisplayBy);
  const sortMenuDisplay = textMenu === 'Отображать по';

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = e => {
    const event = e.currentTarget.innerText;

    if (event === 'алфавиту' || event === 'цене') {
      dispatch(productsAction.sort(event));
    }
    if (event === '20' || event === '40' || event === '60') {
      dispatch(productsAction.display(event));
    }
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        className={s.button}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <span className={s.btnText}>{textMenu}</span>
        {sortMenuDisplay && <span className={s.displayBy}>{displayBy}</span>}
        <img
          className={open ? `${s.arrowUp}` : `${s.arrowDown}`}
          src={arrowMenuFilter}
          alt="arrowMenuFilter"
        />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem className={s.menuItem} onClick={handleClose}>
          {textItems[0]}
        </MenuItem>
        <MenuItem className={s.menuItem} onClick={handleClose}>
          {textItems[1]}
        </MenuItem>
        <MenuItem className={s.menuItem} onClick={handleClose}>
          {textItems[2]}
        </MenuItem>
      </Menu>
    </>
  );
};

export default SortMenu;

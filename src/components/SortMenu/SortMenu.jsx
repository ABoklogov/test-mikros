import { useState } from 'react';
import s from './SortMenu.module.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import arrowMenuFilter from '../../images/icons/arrowMenuFilter.svg';

const SortMenu = ({ textMenu, textItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
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

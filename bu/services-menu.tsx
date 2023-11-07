"use client"

import { useState } from 'react';
import NextLink from 'next/link';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ServicesMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        color="inherit"
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleClick}
      >
        Услуги
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
        <MenuItem onClick={handleClose} component={NextLink} href="/services/rent">Аренда зала</MenuItem>
        <MenuItem onClick={handleClose} component={NextLink} href="/services/fitness">Фитнес</MenuItem>
        <MenuItem onClick={handleClose} component={NextLink} href="/services/grooming">Груминг</MenuItem>
        <MenuItem onClick={handleClose} component={NextLink} href="/services/heandling">Хендлинг</MenuItem>
        <MenuItem onClick={handleClose} component={NextLink} href="/services/photograph">Фотограф</MenuItem>
      </Menu>
    </>
  );
}
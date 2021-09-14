import React from 'react';
import headerStyle from './style.module.css';
import icon from '../assets/icon.svg';

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <img src={icon} className={headerStyle.computer__icon} />
      <nav className={headerStyle.header__navigation}>
        <a className={headerStyle.header__navigation__item} href=''>
          About me
        </a>
        <a className={headerStyle.header__navigation__item} href=''>
          Portfolio
        </a>
        <a className={headerStyle.header__navigation__item} href=''>
          Contacts
        </a>
      </nav>
    </header>
  );
};

export default Header;

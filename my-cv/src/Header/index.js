import React from 'react';
import headerStyle from './style.module.css';

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.header__list}></nav>
    </header>
  );
};

export default Header;

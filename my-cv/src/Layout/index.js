import React from 'react';
import Header from '../Header';
import layoutStyle from './style.module.css';

const Layout = () => {
  return (
    <div className={layoutStyle.layout}>
      <Header />
      <div className={layoutStyle.forest}></div>
      <div className={layoutStyle.container}></div>
    </div>
  );
};

export default Layout;

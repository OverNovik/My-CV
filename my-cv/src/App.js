import React from 'react';
import Header from './Header';
import appStyle from './style.module.css';

const App = () => {
  return (
    <div className={appStyle.App}>
      <Header />
    </div>
  );
};

export default App;

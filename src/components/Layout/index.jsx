import React from 'react';
import NavBar from '../NavBar';

const Layout = ({ children }) => (
  <div className="mg pushable">
    <NavBar />
    <div className="mg content landing">
      {children}
    </div>
  </div>
);

export default Layout;

import React from 'react';

const NavBar = ({title = 'Maintenance Tracker'}) => (
  <div className="mg navbar">
    <i className="open fas fa-bar" />
    <div className="header">{title}</div>
  </div>
);

export default NavBar;

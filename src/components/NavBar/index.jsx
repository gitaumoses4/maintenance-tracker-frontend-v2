import React from 'react';
import PropTypes from 'prop-types';

export const Menu = ({ children }) => (
  <div className="menu">
    {children}
  </div>
);

export const MenuItem = ({ right, children }) => (
  <div className={`item ${right ? 'right aligned': ''}`}>
    {children}
  </div>
);

const NavBar = ({title, toggleSideBar, menu}) => (
  <div className="mg navbar">
    { toggleSideBar && ( <i className="open fas fa-bar" /> ) }
    <div className="header">{title}</div>
    { menu }
  </div>
);

NavBar.propTypes = {
  title: PropTypes.string,
  toggleSideBar: PropTypes.bool
};

NavBar.defaultProps = {
  title: 'Maintenance Tracker',
  toggleSideBar: false
};

MenuItem.propTypes = {
  right: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
};

MenuItem.defaultProps = {
  right: false
};

Menu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired
};

export default NavBar;

import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({title, toggleSideBar}) => (
  <div className="mg navbar">
    { toggleSideBar && ( <i className="open fas fa-bar" /> ) }
    <div className="header">{title}</div>
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

export default NavBar;

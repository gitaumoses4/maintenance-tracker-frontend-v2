import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NavBar from '../NavBar';
import { children } from '../../lib/props';


const Layout = ({ children, landing, menu }) => (
  <div className="mg pushable">
    <NavBar menu={menu} />
    <div
      className={classNames({ 'mg content': true, 'landing': landing })}
    >
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children,
  landing: PropTypes.bool,
  menu: PropTypes.object
};

Layout.defaultProps = {
  landing: false,
  children: null,
  menu: null
};


export default Layout;

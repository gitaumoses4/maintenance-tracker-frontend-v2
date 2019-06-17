import React from 'react';
import { children } from '../../lib/props';

const Container = ({ children }) => (
  <div className="mg container">
    { children }
  </div>
);

Container.propTypes = {
  children: children.isRequired
};

export default Container;

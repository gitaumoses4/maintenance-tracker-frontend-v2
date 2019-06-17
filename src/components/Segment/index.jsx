import React from 'react';
import PropTypes from 'prop-types';
import { children } from '../../lib/props';

export const Content = ({ children }) => {
  return (
    <div className="content">
      { children }
    </div>
  );
};

const Segment = ({ children })=> {
  return (
    <div className="mg segment">
      { children }
    </div>
  );
};

Segment.propTypes = {
  children: children.isRequired
};

Content.propTypes = {
  children: children.isRequired
};

export default Segment;

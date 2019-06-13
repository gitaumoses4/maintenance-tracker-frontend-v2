import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({icon}) => {
  return (
    <i className={`icon fas ${icon}`} />
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};

Icon.defaultProps = {};

export default Icon;

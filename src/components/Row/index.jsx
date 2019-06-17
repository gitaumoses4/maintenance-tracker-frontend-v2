import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import  { children } from '../../lib/props';

const numbers = ['',
  'one','two','three','four','five','six',
  'seven','eight','nine', 'ten', 'eleven',
  'twelve'
];

export const Column = ({ children , large, medium, small, center }) => {
  const classes = {
    center,
    column: true,
    mg: true,
    [`${numbers[large]}-large`]: large,
    [`${numbers[medium]}-medium`]: medium,
    [`${numbers[small]}-small`]: small
  };

  return (
    <div className={classNames(classes)}>
      { children }
    </div>
  );
};

export const Row = ({ children }) => (
  <div className="mg row">
    { children }
  </div>
);

Column.propTypes = {
  children: children.isRequired,
  center: PropTypes.bool,
  medium: PropTypes.number,
  large: PropTypes.number,
  small: PropTypes.number
};

Column.defaultProps = {
  center: false,
  medium: 0,
  large: 12,
  small: 0
};

Row.propTypes = {
  children: children.isRequired
};

export default Row;

import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import {Menu, MenuItem} from '../../components/NavBar';
import Icon from '../../components/Icon';

const RegisterMenu = () => (
  <Menu>
    <MenuItem right>
      <Icon icon="fa-phone" />
      <span className="padded left">
        +254705045048
      </span>
    </MenuItem>
  </Menu>
);

const Register = (props) => {
  return (
    <Layout menu={<RegisterMenu />}>
      Register
    </Layout>
  );
};

Register.propTypes = {};

Register.defaultProps = {};

export default Register;

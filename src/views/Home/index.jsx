import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import landing from '../../assets/images/landing.jpeg';
import {Menu, MenuItem} from '../../components/NavBar';

const HomeMenu = (props) => {
  return (
    <Menu>
      <MenuItem right>
        <Link to="/login">
          Login
        </Link>
      </MenuItem>
    </Menu>
  );
};

HomeMenu.propTypes = {};

HomeMenu.defaultProps = {};


class Home extends Component{
  render(){
    return (
      <div className="landing body" style={{backgroundImage: `url(${landing})`}}>
        <Layout menu={<HomeMenu />}>
          <h1 className="landing header">The best way to reach out to our operations and repairs department.</h1>
          <h2 className="landing sub header">Easily manage your repairs and maintenance</h2>

          <div className="mg row">
            <Link to="/register" className="mg center landing button">GET STARTED</Link>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Home;

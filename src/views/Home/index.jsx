import React, { Component } from 'react';
import Layout from '../../components/Layout';
import landing from '../../assets/images/landing.jpeg';

class Home extends Component{
  render(){
    return (
      <div className="landing body" style={{backgroundImage: `url(${landing})`}}>
        <Layout />
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout';
import landing from '../../assets/images/landing.jpeg';

class Home extends Component{
  render(){
    return (
      <div className="landing body" style={{backgroundImage: `url(${landing})`}}>
        <Layout>
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

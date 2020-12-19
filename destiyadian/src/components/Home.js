import React from 'react';
import { Link } from 'react-router-dom';
// import './../assets/css/components/_home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="hero-container">
        <div className="hero">
          <h1>
            Hello, I'm Destiya
          </h1>

          <div className="sub-hero">
            <ul className="home-menu">
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/experiences">Experiences</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>


      </div>
    )
  }
}

export default Home;
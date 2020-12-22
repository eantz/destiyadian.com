import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './../history';

const Header = (props) => {
  return (
    <div>
      <nav className="main-nav">
        <div className="home-link">
          <Link to="/">destiyadian.com</Link>
        </div>
      </nav>

      <div className="section-title">
        <h2>{props.sectionTitle}</h2>

        <button className="back-button" onClick={() => history.goBack()}>back</button>
      </div>
    </div>
    
  )
}

Header.propTypes = {
  sectionTitle: PropTypes.string.isRequired
}

export default Header;
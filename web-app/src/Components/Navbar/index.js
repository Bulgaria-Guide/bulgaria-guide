import React from 'react';
import {NavLink} from 'react-router-dom';
import View from '../UI/View';
import './styles.css';

const Navbar = () => {
  const title = 'Bulgaria Guide';

  return (
    <nav className="nav-wrapper blue">
      <View className="container">
        <a className="brand-logo">{title}</a>
        <ul className="right">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/sights">Sights</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </View>
    </nav>
  );
};

export default Navbar;

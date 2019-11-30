import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import View from '../UI/View';
import './styles.css';

const Navbar = () => {
  const title = 'Bulgaria Guide';

  return (
    <nav className="nav-wrapper blue" id="sticky">
      <View className="container">
        <Link to="/home" className="brand-logo">{title}</Link>
        <ul className="right">
          <li>
            <NavLink to="/home">Начало</NavLink>
          </li>
          <li>
            <NavLink to="/sights">Обекти</NavLink>
          </li>
          <li>
            <NavLink to="/login">Вход</NavLink>
          </li>
          <li>
            <NavLink to="/admin">Администрация</NavLink>
          </li>
        </ul>
      </View>
    </nav>
  );
};

export default Navbar;

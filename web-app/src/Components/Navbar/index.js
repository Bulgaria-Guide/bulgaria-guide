import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import View from '../UI/View';
import './styles.css';
import useAccount from 'hooks/useAccount';

const Navbar = () => {
  const title = 'Bulgaria Guide';
  const { isLoggedIn, isAdmin, logout } = useAccount();

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
          {isLoggedIn &&
            <li>
              <NavLink to="/sightForm">Добавяне на обект</NavLink>
            </li>
          }
          {!isLoggedIn &&
            <li>
              <NavLink to="/login">Вход</NavLink>
            </li>
          }
          {!isLoggedIn &&
            <li>
              <NavLink to="/register">Регистрация</NavLink>
            </li>
          }
          {isAdmin &&
            <li>
              <NavLink to="/admin">Администрация</NavLink>
            </li>
          }
          {isLoggedIn &&
            <li>
              <Link onClick={logout} to="/home">Изход</Link>
            </li>
          }
        </ul>
      </View>
    </nav>
  );
};

export default Navbar;

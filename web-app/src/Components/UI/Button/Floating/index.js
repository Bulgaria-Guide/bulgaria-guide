import React from 'react';
import { Link } from 'react-router-dom';

const FloatingButton = ({ label, style, color = 'red', to, onClick }) => (
  <Link to={to} className={`btn-floating halfway-fab waves-effect waves-light ${color}`} style={style} onClick={onClick}>
    <i className="material-icons">{label}</i>
  </Link>
);

export default FloatingButton;

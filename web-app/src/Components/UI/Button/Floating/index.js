import React from 'react';

const FloatingButton = ({ label, style, color = 'red' }) => (
  <a className={`btn-floating halfway-fab waves-effect waves-light ${color}`} style={style}>
    <i className="material-icons">{label}</i>
  </a>
);

export default FloatingButton;

import React from 'react';
import './styles.css';

const Text = ({ children, bold = false }) => (
  bold
    ? <span className="boldText">{children}</span>
    : <span className="text">{children}</span>
);

export default Text;

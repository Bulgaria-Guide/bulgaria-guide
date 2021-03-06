import React from 'react';

const TextField = ({ fieldName, label, cols = 12 }) => (
  <div className={`input-field col s${cols}`}>
    <input
      type="text"
      name={fieldName}
    />
    <label
      className="active"
      style={{
        'backgroundColor': 'transparent',
        'paddingLeft': 0
      }}
      htmlFor="textarea1">{label}
    </label>
  </div>
);

export default TextField;

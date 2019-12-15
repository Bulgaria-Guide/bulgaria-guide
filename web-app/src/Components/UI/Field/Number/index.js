import React from 'react';

const NumberField = ({ fieldName, label, cols = 12 }) => (
  <div className={`input-field col s${cols}`}>
    <input
      type="number"
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
  </div >
);

export default NumberField;

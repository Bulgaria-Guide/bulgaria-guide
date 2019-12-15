import React from 'react';

const TextField = ({ fieldName, label }) => (
  <div className="input-field col s12">
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

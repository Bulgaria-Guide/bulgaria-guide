
import React from 'react';

const View = props => (
    <div className={props.className} style={props.style}>
        {props.children}
    </div>
);

export default View;

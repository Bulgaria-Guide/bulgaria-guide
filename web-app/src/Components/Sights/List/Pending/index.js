import React from 'react';
import { NavLink } from 'react-router-dom';
import Text from '../../../UI/Text';
import FloatingButton from '../../../UI/Button/Floating';

const PendingSightCard = props => (
  <div className="col s12 m7">
    <div className="card horizontal">
      <FloatingButton label="&#10004;" style={{
        'right': 50,
        'top': 5
      }} color="green" />
      <FloatingButton label="X" style={{
        'right': 5,
        'top': 5
      }} color="red" />
      <div className="card-image">
        <img
          src="https://lorempixel.com/100/190/nature/6"
          height="100%"
          alt={props.sight.name}
        />
      </div>
      <div className="card-stacked">
        <div className="card-content" style={{ 'paddingTop': 0 }}>
          <h4 className="header">{`${props.sight.name}`}</h4>
          <Text>{props.sight.description.substr(0, 135).concat('...')}</Text>
        </div>
        <div className="card-action">
          <NavLink to={{
            'pathname': `/details/${props.sight.id}`,
            'sight': props.sight
          }}>
            Вижте още
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);

export default PendingSightCard;

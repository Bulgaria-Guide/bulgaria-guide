import React from 'react';
import { NavLink } from 'react-router-dom';
import Text from '../../../UI/Text';

const SightCard = ({ sight }) => (
  <div className="col s12 m7">
    <div className="card horizontal">
      <div className="card-image">
        {sight.picture_path && <img
          // eslint-disable-next-line no-undef
          src={require(`../../../../resources${sight.picture_path}`)}
          height="200px"
          width="450px"
          alt={sight.name}
        />
        }
      </div>
      <div className="card-stacked">
        <div className="card-content" style={{ 'paddingTop': 0 }}>
          <h4 className="header">{`${sight.name}`}</h4>
          <Text>{sight.description.substr(0, 300).concat('...')}</Text>
        </div>
        <div className="card-action">
          <NavLink to={`/details/${sight.id}`}>
            Вижте още
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);

export default SightCard;

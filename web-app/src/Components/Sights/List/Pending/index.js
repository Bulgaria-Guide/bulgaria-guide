import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import Text from 'Components/UI/Text';
import FloatingButton from 'Components/UI/Button/Floating';
import APIClient from 'ApiClient';
import useAccount from 'hooks/useAccount';

const PendingSightCard = ({ sight, onManageSight }) => {

  const { authToken } = useAccount();

  const handleAccept = useCallback(event => {
    APIClient.approveSight(sight.id, authToken)
      .then(() => onManageSight())
      .catch(err => console.error(err));
    event.preventDefault();
  }, [authToken, onManageSight, sight.id]);

  const handleDecline = useCallback(event => {
    APIClient.declineSight(sight.id, authToken)
      .then(() => onManageSight())
      .catch(err => console.error(err));
    event.preventDefault();
  }, [authToken, onManageSight, sight.id]);

  return (
    <div className="col s12 m7">
      <div className="card horizontal">
        <FloatingButton
          label="&#10004;"
          style={{
            'right': 50,
            'top': 5
          }}
          onClick={handleAccept}
          color="green" />
        <FloatingButton
          label="X"
          style={{
            'right': 5,
            'top': 5
          }}

          onClick={handleDecline}
          color="red" />
        <div className="card-image">
          <img
            src="https://lorempixel.com/100/190/nature/6"
            height="100%"
            alt={sight.name}
          />
        </div>
        <div className="card-stacked">
          <div className="card-content" style={{ 'paddingTop': 0 }}>
            <h4 className="header">{`${sight.name}`}</h4>
            <Text>{sight.description.substr(0, 135).concat('...')}</Text>
          </div>
          <div className="card-action">
            <NavLink to={{
              'pathname': `/details/${sight.id}`,
              sight
            }}>
              Вижте още
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingSightCard;

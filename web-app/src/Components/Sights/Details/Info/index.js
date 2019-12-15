import React, { useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import Text from '../../../UI/Text';
import FloatingButton from 'Components/UI/Button/Floating';
import useAccount from 'hooks/useAccount';
import APIClient from 'ApiClient';
import RatingStars from 'Components/UI/Rating/Stars';

const SightInfo = ({ sight }) => {
  const { isAdmin, isLoggedIn, authToken } = useAccount();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [ratingWasSent, setRatingWasSent] = useState(false);

  const onSetRating = useCallback(rating => {
    console.log(rating);
    APIClient.rateSight(sight.id, rating, authToken)
      .then(({ 'rating': newRating }) => {
        setRatingWasSent(true);
        sight.rating = newRating;
      })
      .then(console.error);
  }, [authToken, sight.id, sight.rating]);

  const deleteSight = useCallback(() => {
    APIClient.deleteSight(sight.id, authToken)
      .then(() => setShouldRedirect(true))
      .catch(err => console.error(err));
  }, [authToken, sight.id]);

  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content" style={{ 'flex': 1 }}>
            {isAdmin && <FloatingButton to="/home" style={{
              'top': 0,
              'right': 0
            }} label="X" onClick={deleteSight} />}
            <div className="card-image">
              <img src={sight.picture_path} />
              <span className="card-title">{sight.name}</span>
              <Text>
                {`Рейтинг: ${sight.rating}/5`}
              </Text>
              {isLoggedIn && !ratingWasSent && <RatingStars onClick={onSetRating} />}
            </div>
            <Text>{`Местоположение: ${sight.address}`}</Text>
            <Text>
              {`Работно време: от ${sight.workingTimeFrom} до ${sight.workingTimeTo}`}
            </Text>
            <Text>{`Цена: ${sight.price} лв.`}</Text>
            {/* <Text>
              {`Времето в момента: ${sight.weather.outlook}, ${sight.weather.temp}C.`}
            </Text> */}
            <Text>{sight.description}</Text>
          </div>
        </div>
      </div>
      {shouldRedirect && <Redirect to="/sights" />}
    </div>
  );
};
export default SightInfo;

/* eslint-disable no-undef */
import React, { useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import Text from '../../../UI/Text';
import FloatingButton from 'Components/UI/Button/Floating';
import useAccount from 'hooks/useAccount';
import APIClient from 'ApiClient';
import RatingStars from 'Components/UI/Rating/Stars';
import View from 'Components/UI/View';

const SightInfo = ({ sight }) => {
  const { isAdmin, isLoggedIn, authToken } = useAccount();

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [ratingWasSent, setRatingWasSent] = useState(false);
  const [rating, setRating] = useState(sight.rating);

  const onSetRating = useCallback(rating => {
    APIClient.rateSight(sight.id, rating, authToken)
      .then(({ 'rating': newRating }) => {
        setRatingWasSent(true);
        setRating(parseFloat(newRating));
      })
      .catch(console.error);
  }, [authToken, sight.id]);

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
              {
                sight.picture_path &&
                <img src={require(`resources/img2/${sight.picture_path}`)} />
              }
              <span className="card-title">{sight.name}</span>
              <Text bold>Рейтинг:</Text>
              <Text>{`${rating.toFixed(2)}/5`}</Text>
              {isLoggedIn && !ratingWasSent && <RatingStars onClick={onSetRating} />}
            </div>
            <View>
              <Text bold>Местоположение:</Text>
              <Text>{` ${sight.address}`}</Text>
            </View>
            <View>
              <Text bold>Работно време - от:</Text>
              <Text>{` ${sight.working_time_from} `}</Text>
              <Text bold>до:</Text>
              <Text>{` ${sight.working_time_to}`}</Text>
            </View>
            <View>
              <Text bold>Цена:</Text>
              <Text>{` ${sight.price} лв`}</Text>
            </View>
            {sight.weather &&
              <View>
                <Text bold>Времето в момента:</Text>
                <Text>{` ${sight.weather.outlook}, ${sight.weather.temp} C`}</Text>
              </View>
            }
            <View>
              <Text bold>Описание:</Text>
              <Text>{` ${sight.description}`}</Text>
            </View>
          </div>
        </div>
      </div>
      {shouldRedirect && <Redirect to="/home" />}
    </div>
  );
};
export default SightInfo;

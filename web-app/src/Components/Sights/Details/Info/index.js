import React from 'react';
import Text from '../../../UI/Text';
import FloatingButton from 'Components/UI/Button/Floating';
import useRole from 'hooks/useRole';

const SightInfo = props => {
  const { isAdmin } = useRole();

  const deleteSight = () => {
    // APIClient.deleteSight(props.sight.id);
  }

  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content" style={{ 'flex': 1 }}>
            {isAdmin && <FloatingButton to='/home' style={{ top: 0, right: 0 }} label="X" onClick={deleteSight} />}
            <div className="card-image">
              <img src="https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzc2ODY3MjhjZjE3ZGI5NGI1NF83NDA5Mjk1NTA4X2UxNGMwYTU1Yzlfay5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0" />
              <span className="card-title">{props.sight.name}`}</span>
            </div>
            <Text>{`Местоположение: ${props.sight.address}`}</Text>
            <Text>
              {`Работно време: от ${props.sight.workingTimeFrom} до ${props.sight.workingTimeTo}`}
            </Text>
            <Text>{`Цена: ${props.sight.price} лв.`}</Text>
            <Text>
              {`Времето в момента: ${props.sight.weather.outlook}, ${props.sight.weather.temp}C.`}
            </Text>
            <Text>{props.sight.description}</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SightInfo;

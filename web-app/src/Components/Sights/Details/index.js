import React from 'react';
import Text from '../../UI/Text';
import ContainerLayout from '../../UI/ContainerLayout';

const SightDetails = props => {
  const { sight } = props.location;

  return (
    <ContainerLayout header={sight.name}>
      <Text>{`Местоположение: ${sight.address}`}</Text>
      <Text>
        {`Работно време: от ${sight.workingTimeFrom} до ${sight.workingTimeTo}`}
      </Text>
      <Text>{`Цена: ${sight.price} лв.`}</Text>
      <Text>
        {`Времето в момента: ${sight.weather.outlook}, ${sight.weather.temp}C.`}
      </Text>

      <Text>{sight.description}</Text>
    </ContainerLayout>
  );
};

export default SightDetails;

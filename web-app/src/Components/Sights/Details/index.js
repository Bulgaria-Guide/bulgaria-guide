import React from 'react';
import Comments from './Comments';
import ContainerLayout from '../../UI/ContainerLayout';
import SightInfo from './Info';
// import APIClient from '../../../ApiClient';
import constants from '../../../constants';

const tempSight = constants.sights.details;

const SightDetails = props => {
  // const sight = APIClient.getSightDetails(props.match.params.id);
  // remove location.sight
  const sight = props.location.sight || tempSight;

  return (
    <ContainerLayout header={sight.name}>
      <SightInfo sight={sight} />
      <Comments sight={sight.id} />
    </ContainerLayout>
  );
};

export default SightDetails;

import React from 'react';
import CommentsList from './Comments/List';
import ContainerLayout from '../../UI/ContainerLayout';
import SightInfo from './Info';
// import APIClient from '../../../ApiClient';
import constants from '../../../constants';

const tempSight = constants.sights.details;

const SightDetails = props => {
  // const sight = APIClient.getSightDetails(props.match.params.id); //remove location.sight
  const sight = props.location.sight || tempSight;

  return (
    <ContainerLayout header={sight.name}>
      <SightInfo sight={sight} />
      <CommentsList />
    </ContainerLayout>
  );
};

export default SightDetails;

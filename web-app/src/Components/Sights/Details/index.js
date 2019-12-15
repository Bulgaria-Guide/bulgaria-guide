import React, { useState, useEffect } from 'react';
import Comments from './Comments';
import ContainerLayout from '../../UI/ContainerLayout';
import SightInfo from './Info';
import APIClient from 'ApiClient';

const SightDetails = props => {

  const [sight, setSight] = useState();

  useEffect(() => {
    const fetchSight = () => APIClient.getSightDetails(props.match.params.id)
      .then(res => {
        console.log(res);
        setSight(res);
      })
      .catch(err => console.error(err));
    fetchSight();
  }, [props.match.params.id]
  );

  return sight ? (
    <ContainerLayout header={sight.name}>
      <SightInfo sight={sight} />
      <Comments sightId={sight.id} />
    </ContainerLayout>
  ) : null;
};

export default SightDetails;

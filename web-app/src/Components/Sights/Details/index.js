import React, { useState, useEffect } from 'react';
import Comments from './Comments';
import ContainerLayout from '../../UI/ContainerLayout';
import SightInfo from './Info';
import APIClient from 'ApiClient';

const SightDetails = props => {

  const [sight, setSight] = useState({});

  useEffect(() => {
    const fetchSight = () => APIClient.getSightDetails(props.match.params.id)
      .then(res => setSight(res))
      .catch(err => console.error(err));
    fetchSight();
  }, [props.match.params.id]
  );

  return (
    <ContainerLayout header={sight.name}>
      {sight && <SightInfo sight={sight} />}
      {sight && <Comments sightId={sight.id} />}
    </ContainerLayout>
  );
};

export default SightDetails;

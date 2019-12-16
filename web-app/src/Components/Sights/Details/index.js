import React, { useState, useEffect } from 'react';
import Comments from './Comments';
import ContainerLayout from '../../UI/ContainerLayout';
import SightInfo from './Info';
import APIClient from 'ApiClient';
import { Redirect } from 'react-router-dom';

const SightDetails = props => {
  const [sight, setSight] = useState();
  const [shouldRedirect, setShouldRedirect] = useState();

  useEffect(() => {
    const fetchSight = () => APIClient.getSightDetails(props.match.params.id)
      .then(res => {
        if (!res.id) {
          setShouldRedirect(true);
        }
        setSight(res);
      })
      .catch(console.error);
    fetchSight();
  }, [props.match.params.id]
  );

  return sight ? (
    <ContainerLayout header={sight.name}>
      <SightInfo sight={sight} />
      <Comments sightId={sight.id} />
      {shouldRedirect && <Redirect to="/home" />}
    </ContainerLayout>
  ) : null;
};

export default SightDetails;

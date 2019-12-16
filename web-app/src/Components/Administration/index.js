import React, { useState, useEffect } from 'react';
import ContainerLayout from '../UI/ContainerLayout';
import SightsList from '../Sights/List';
import APIClient from 'ApiClient';
import useAccount from 'hooks/useAccount';

const Administration = () => {
  const [pendingSights, setPendingSights] = useState();
  const { authToken } = useAccount();

  useEffect(() => {
    APIClient.getPendingSights(authToken)
      .then(setPendingSights)
      .catch(console.error);
  }, [authToken]);

  return pendingSights ? (
    <ContainerLayout header={'Администрация'}>
      <SightsList sights={pendingSights} pending updateSightsList={setPendingSights} />
    </ContainerLayout>
  ) : null;
};

export default Administration;

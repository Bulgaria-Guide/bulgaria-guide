import React, { useState, useEffect } from 'react';
import ContainerLayout from '../UI/ContainerLayout';
import SightsList from '../Sights/List';
import APIClient from 'ApiClient';

const Administration = () => {
  const [pendingSights, setPendingSights] = useState([]);

  useEffect(() => {
    APIClient.getPendingSights()
      .then(res => {
        console.log(res);
        setPendingSights(res);
      })
      .catch(err => {
        console.log(err);
        return null;
      });
  }, []);
  return (
    <ContainerLayout header={'Администрация'}>
      <SightsList sights={pendingSights} pending updateSightsList={setPendingSights} />
    </ContainerLayout>
  );
};

export default Administration;

import React, { useState, useCallback } from 'react';
import ContainerLayout from '../UI/ContainerLayout';
import SearchBar from 'Components/Search/Bar';
import SightsList from 'Components/Sights/List';
import APIClient from 'ApiClient';

const Home = () => {
  const [sights, setSights] = useState();

  const onSubmit = useCallback(data => {
    APIClient.getSightsBy(data)
      .then(res => {
        setSights(res);
      })
      .catch(() => {
        setSights([]);
      });
  }, []);

  return (
    <ContainerLayout>
      <SearchBar onSubmit={onSubmit} />
      {sights && <SightsList sights={sights} />}
    </ContainerLayout>
  );
};

export default Home;

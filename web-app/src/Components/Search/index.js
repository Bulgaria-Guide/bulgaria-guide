import React, { useCallback, useState } from 'react';
import SearchBar from './Bar';
import SightsList from '../Sights/List';
import ContainerLayout from '../UI/ContainerLayout';
import APIClient from 'ApiClient';

const Search = () => {
  const [sights, setSights] = useState([]);

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
    <ContainerLayout title="Обекти">
      <SearchBar onSubmit={onSubmit} />
      <SightsList sights={sights} />
    </ContainerLayout>);
};

export default Search;

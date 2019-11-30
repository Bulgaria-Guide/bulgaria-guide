import React from 'react';
import SearchBar from '../Seach/Bar';
import SightsList from '../Sights/List';
import ContainerLayout from '../UI/ContainerLayout';

const Search = () => <ContainerLayout title="Обекти">
  <SearchBar />
  <SightsList />
</ContainerLayout>;

export default Search;

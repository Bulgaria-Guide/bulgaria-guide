import React from 'react';
import Text from '../UI/Text';
import ContainerLayout from '../UI/ContainerLayout';
import SearchBar from '../SeachBar';

const Home = () => (
  <ContainerLayout header="Home">
    <SearchBar />
    <Text>
      Niq e mnogo qka
    </Text>
  </ContainerLayout>
);

export default Home;

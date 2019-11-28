import React from 'react';
import SightCard from './Card';
import View from '../../UI/View';
import constants from '../../../constants';

const sights = constants.sights.list;

const SightsList = () => {
  const sightsList = sights.map(
    sight => <SightCard sight={sight} key={sight.id}/>
  );

  return <View>
    {sightsList}
  </View>;
};

export default SightsList;

import React from 'react';
import SightCard from './Card';
import View from '../../UI/View';
import constants from '../../../constants';
import PendingSightCard from './Pending';

const sights = constants.sights.list;

const SightsList = ({ pending = false }) => {
  const renderSight = sight => (pending
    ? <PendingSightCard sight={sight} key={sight.id} />
    : <SightCard sight={sight} key={sight.id} />);

  const sightsList = sights.map(renderSight);

  return <View>
    {sightsList}
  </View>;
};

export default SightsList;

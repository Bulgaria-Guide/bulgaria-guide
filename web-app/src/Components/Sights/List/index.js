import React from 'react';
import SightCard from './Card';
import View from '../../UI/View';
import constants from '../../../constants';
import PendingSightCard from './Pending';
import APIClient from '../../../ApiClient';

// const sights = constants.sights.list;

async function SightsList({ pending = false }) {
  const sights = await APIClient.getSightsBy();

  console.log(sights);
  const renderSight = sight => (pending
    ? <PendingSightCard sight={sight} key={sight.id} />
    : <SightCard sight={sight} key={sight.id} />);

  // const sightsList = sights.map(renderSight);

  return <View>
    {/* {sightsList} */}
  </View>;
};

export default SightsList;

import React, { useState, useEffect, useMemo } from 'react';
import SightCard from './Card';
import View from '../../UI/View';
import constants from '../../../constants';
import PendingSightCard from './Pending';
import APIClient from '../../../ApiClient';

// const sights = constants.sights.list;

function SightsList({ pending = false }) {

  const [sights, setSights] = useState([]);

  useEffect(() => {
    APIClient.getAllSights().then(data => {
      console.log(data);
      setSights(data)
    }).catch(err => {
      console.log(err);
      return null;
    });
  }, [setSights]);


  // console.log(sights);

  const renderSight = sight => (pending
    ? <PendingSightCard sight={sight} key={sight.id} />
    : <SightCard sight={sight} key={sight.id} />
  );

  const sightsList = useMemo(
    () => {
      console.log("MEEMO");
      return sights.map(renderSight)
    },
    [sights]);

  return (
    <View>
      {sights.length === 0 ? <div>Loading...</div> : sightsList}
    </View>
  );
};

export default SightsList;

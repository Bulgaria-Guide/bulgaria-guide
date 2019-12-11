import React, { useMemo, useCallback } from 'react';
import SightCard from './Card';
import View from '../../UI/View';
import PendingSightCard from './Pending';

function SightsList({ sights, pending = false }) {

  const renderSight = useCallback(sight => (pending
    ? <PendingSightCard sight={sight} key={sight.id} />
    : <SightCard sight={sight} key={sight.id} />
  ), [pending]);

  const sightsList = useMemo(
    () => sights.map(renderSight),
    [renderSight, sights]);

  return (
    <View>
      {sights.length === 0
        ? <div>Loading...</div>
        : sightsList}
    </View>
  );
}

export default SightsList;

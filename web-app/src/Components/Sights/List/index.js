import React, { useMemo, useCallback } from 'react';
import SightCard from './Card';
import View from '../../UI/View';
import PendingSightCard from './Pending';

function SightsList({ sights, pending = false, updateSightsList }) {

  const onManageSight = useCallback(sightId => () => {
    const newSightsList = sights.filter(sight => sight.id !== sightId);
    updateSightsList(newSightsList);
  }, [updateSightsList, sights]);

  const renderSight = useCallback(sight => (pending
    ? <PendingSightCard sight={sight} key={sight.id} onManageSight={onManageSight(sight.id)} />
    : <SightCard sight={sight} key={sight.id} />
  ), [onManageSight, pending]);

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

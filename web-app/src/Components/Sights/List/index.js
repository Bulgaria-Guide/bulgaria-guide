import React, { useMemo, useCallback } from 'react';
import SightCard from './Card';
import View from '../../UI/View';
import PendingSightCard from './Pending';
import constants from 'resources/constants';
// import APIClient from 'ApiClient';

const sights = constants.sights.list;

function SightsList({ pending = false }) {

  // const [sights, setSights] = useState([]);

  // useEffect(() => {
  //   APIClient.getAllSights().then(data => {
  //     console.log(data);
  //     setSights(data);
  //   })
  //     .catch(err => {
  //       console.log(err);

  //       return null;
  //     });
  // }, [setSights]);

  const renderSight = useCallback(sight => (pending
    ? <PendingSightCard sight={sight} key={sight.id} />
    : <SightCard sight={sight} key={sight.id} />
  ), [pending]);

  const sightsList = useMemo(
    () => sights.map(renderSight),
    [renderSight]);

  return (
    <View>
      {sights.length === 0
        ? <div>Loading...</div>
        : sightsList}
    </View>
  );
}

export default SightsList;

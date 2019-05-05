import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { getCafes } from '../../api/cafes';
import CafesMap from './CafesMap';
import Fallback from '../common/Fallback';
import Loader from '../common/Loader';
import { getLocation } from '../../utils/userLocation';

const Cafes = ({ className }) => {
  const [cafes, setCafes] = useState({ isLoading: true, data: [] });
  const [userLocation, setUserLocation] = useState({ isLoading: true, data: [] });

  const fetchAll = async () => {
    const location = await getLocation;
    setUserLocation({ isLoading: false, ...location });

    const latitude = location.center[0];
    const longitude = location.center[1];

    getCafes({ latitude, longitude }).then(res => setCafes({ isLoading: false, data: res.items }));
  };
  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className={className}>
      <Fallback isLoading={cafes.isLoading || userLocation.isLoading} Component={Loader}>
        <CafesMap cafes={cafes.data} userLocation={userLocation} />
      </Fallback>
    </div>
  );
};

export default withRouter(Cafes);

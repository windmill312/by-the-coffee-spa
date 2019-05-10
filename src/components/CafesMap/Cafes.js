import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { getCafes } from '../../api/cafes';
import CafesMap from './CafesMap';
import Fallback from '../common/Fallback';
import Loader from '../common/Loader';
import { getLocation } from '../../utils/userLocation';
import SubTitle from '../common/SubTitle';

const Cafes = ({ className }) => {
  const [cafes, setCafes] = useState({ isLoading: true, data: [], isError: false });
  const [userLocation, setUserLocation] = useState({ isLoading: true, data: [] });

  const fetchAll = async () => {
    const location = await getLocation;
    setUserLocation({ isLoading: false, ...location });

    const latitude = location.center[0];
    const longitude = location.center[1];

    getCafes({ latitude, longitude })
      .then(res => setCafes({ isLoading: false, data: res.items, isError: false }))
      .catch(err => {
        console.log(`Get error while getting all cafes: ${err}`);
        setCafes({ isLoading: false, data: [], isError: true });
      });
  };
  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className={className}>
      <Fallback isLoading={cafes.isLoading || userLocation.isLoading} Component={Loader}>
        {cafes.isError ? (
          <SubTitle>Упс, произошла какая-то ошибка! Попробуйте снова познее...</SubTitle>
        ) : (
          <CafesMap cafes={cafes.data} userLocation={userLocation} />
        )}
      </Fallback>
    </div>
  );
};

const StyledCafes = styled(Cafes)`
  ${SubTitle} {
    color: #ee6b21;
  }
`;

export default withRouter(StyledCafes);

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { getCafes } from '../../api/cafes';
import CafesMap from './CafesMap';
import Fallback from '../common/Fallback';
import Loader from '../common/Loader';
import TitleContainer from '../TitleContainer';
import Title from '../Title';
import { getLocation } from '../../utils/userLocation';

const Cafes = ({ className }) => {
  const [cafes, setCafes] = useState({ isLoading: true, data: [] });
  const [userLocation, setUserLocation] = useState({
    isLoading: true,
    data: null,
  });

  useEffect(() => {
    getCafes().then(data => setCafes({ isLoading: false, data }));
    getLocation(data => setUserLocation({ isLoading: false, data }));
  }, []);

  return (
    <div className={className}>
      <TitleContainer>
        <Title>Кофейни</Title>
      </TitleContainer>
      <Fallback isLoading={cafes.isLoading} Component={Loader}>
        <CafesMap cafes={cafes.data} />
      </Fallback>
    </div>
  );
};

const StyledCafes = styled(Cafes)`
  ${Title} {
    margin-bottom: 20px;
  }
`;

export default withRouter(StyledCafes);

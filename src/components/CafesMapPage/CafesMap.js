import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import styled from 'styled-components';

const mapState = { center: [55.11, 37.11], zoom: 8 };

const MapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CafesMap = ({ className, cafes, userLocation }) => (
  <div className={className}>
    <MapWrapper>
      <YMaps
        enterprise
        query={{
          apikey: '9de71b93-75e4-4fa8-a648-c132af64c790',
        }}
      >
        <Map state={mapState} />
      </YMaps>
    </MapWrapper>
  </div>
);

const StyledCafesList = styled(CafesMap)`
  display: flex;
  flex-direction: column;
`;

export default StyledCafesList;

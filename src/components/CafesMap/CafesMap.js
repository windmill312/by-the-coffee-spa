import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styled from 'styled-components';
import Title from '../common/Title';
import TitleContainer from '../common/TitleContainer';

const MapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  width: 100%;
  height: 100%;
`;

const CafesMap = ({ className, cafes, userLocation }) => {
  return (
    <div className={className}>
      <TitleContainer>
        <Title>Кофейни</Title>
      </TitleContainer>
      <MapWrapper>
        <YMaps
          enterprise
          query={{
            apikey: '9de71b93-75e4-4fa8-a648-c132af64c790',
          }}
        >
          {console.log(cafes)}
          <Map defaultState={userLocation} width={500} height={500}>
            {cafes.map(data => (
              <Placemark
                key={data.cafeUid}
                geometry={[data.latitude, data.longitude]}
                properties={{
                  hintContent: data.name,
                }}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
              />
            ))}
          </Map>
        </YMaps>
      </MapWrapper>
    </div>
  );
};

const StyledCafesList = styled(CafesMap)`
  ${Title} {
    margin: 16px 0 10px 0;
    padding: 0;
    font-weight: 800;
    font-size: 2rem;
    color: #333333;
    @media (max-width: 450px) {
      font-size: 1.25rem;
    }
  }
  display: flex;
  flex-direction: column;
`;

export default StyledCafesList;

// {cafes.map(data => <Placemark geometry={data} />)}

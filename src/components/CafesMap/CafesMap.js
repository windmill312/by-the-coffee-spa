import React from 'react';
import { YMaps, Map, Placemark, ZoomControl, GeolocationControl } from 'react-yandex-maps';

const CafesMap = ({ className, cafes, userLocation }) => {
  return (
    <div className={className}>
      <YMaps
        enterprise
        query={{
          apikey: '9de71b93-75e4-4fa8-a648-c132af64c790',
        }}
      >
        <Map defaultState={userLocation} width={1438} height={713}>
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
          <ZoomControl />
          <GeolocationControl />
        </Map>
      </YMaps>
    </div>
  );
};

export default CafesMap;

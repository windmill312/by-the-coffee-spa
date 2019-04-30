export const getLocation = () => {
  if ('geolocation' in navigator) {
    // check if geolocation is supported/enabled on current browser
    navigator.geolocation.getCurrentPosition(
      function success(position) {
        // for when getting location is a success
        console.log('latitude', position.coords.latitude, 'longitude', position.coords.longitude);
        return {
          center: [
            parseFloat(position.coords.latitude.toFixed(2)),
            parseFloat(position.coords.longitude.toFixed(2)),
          ],
          zoom: 10,
        };
      },
      function error(errorMessage) {
        // for when getting location results in an error
        console.error('An error has occured while retrieving location', errorMessage);
      },
    );
  } else {
    // geolocation is not supported
    // get your location some other way
    console.log('geolocation is not enabled on this browser');
  }
  return { center: [55.11, 37.11], zoom: 10 };
};

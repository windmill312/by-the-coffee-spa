export const getLocation = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    position => {
      resolve({ center: [position.coords.latitude, position.coords.longitude], zoom: 15 });
    },
    error => {
      console.log(error);
      reject({ center: [55.7522, 37.6156], zoom: 12 });
    },
  );
}).catch(error => error);

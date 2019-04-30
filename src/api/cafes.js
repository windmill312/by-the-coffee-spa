import client from './client';

export const getCafes = () =>
  client.get('/coffeehouses').then(x => {
    console.log(x);
    return x.data;
  });

export const getCafe = ({ id }) =>
  client.get(`/coffeehouses/${id}`).then(x => {
    console.log(x);
    return x.data;
  });

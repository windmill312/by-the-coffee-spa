import client from './client';
import * as apiPath from './apiPath';

export const getAllCafes = () => client.get(apiPath.COFFEEHOUSE).then(x => x.data);

export const getCafes = ({ latitude, longitude }) =>
  client
    .get(`${apiPath.COFFEEHOUSE}?latitude=${latitude}&longitude=${longitude}`)
    .then(x => x.data);

export const getCafe = ({ cafeUid }) =>
  client
    .get(`${apiPath.COFFEEHOUSE}/${cafeUid}`)
    .then(x => x.data)
    .catch(err => console.log(err));

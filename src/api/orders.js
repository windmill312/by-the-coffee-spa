import client from './client';
import * as apiPath from './apiPath';

export const getOrders = () =>
  client.get(`${apiPath.ORDER}/${localStorage.getItem('customerUid')}`).then(x => {
    console.log(x);
    return x;
  });

export const getOrder = ({ id }) =>
  client.get(`${apiPath.ORDER}\\${id}`).then(x => {
    console.log(x);
    return x;
  });

import client from './client';
import * as apiPath from './apiPath';

export const getOrders = () =>
  client.get(`${apiPath.ORDER_CUSTOMER}/${localStorage.getItem('customerUid')}`).then(x => {
    console.log(x);
    return x;
  });

export const getOrder = ({ id }) =>
  client.get(`${apiPath.ORDER}\\${id}`).then(x => {
    console.log(x);
    return x;
  });

export const createOrder = ({ customerUid, cafeUid, products, totalPrice, receiveDttm, status }) =>
  client
    .post(apiPath.ORDER, {
      customerUid,
      cafeUid,
      products,
      totalPrice,
      receiveDttm,
      status,
    })
    .then(x => x.data);

import client from './client';
import * as apiPath from './apiPath';

export const getOrdersByCustomer = ({ customerUid }) =>
  client.get(`${apiPath.ORDER_CUSTOMER}/${customerUid}`).then(x => {
    console.log(x);
    return x;
  });

export const getOrder = ({ orderUid }) =>
  client.get(`${apiPath.ORDER}\\${orderUid}`).then(x => {
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

export const updateOrderStatus = ({ orderUid, status }) =>
  client.patch(apiPath.ORDER, {
    orderUid,
    status,
  });

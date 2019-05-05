import client from './client';
import * as apiPath from './apiPath';

export const getProduct = ({ productUid }) =>
  client.get(`${apiPath.PRODUCT}/${productUid}`).then(x => x.data);

export const getProductsByCafe = ({ cafeUid }) =>
  client.get(`${apiPath.PRODUCTS_BY_CAFE}/${cafeUid}`).then(x => x.data);

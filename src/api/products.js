import client from './client';

export const fetchProducts = ({ cafeUid }) =>
  client
    .get(`/products?cafeUid=${cafeUid}`)
    .then(x => x.data)
    .then(x => x.content);

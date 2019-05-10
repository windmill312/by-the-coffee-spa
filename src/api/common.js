import client from './client';
import * as apiPath from './apiPath';

export const serviceAvailable = ({ serviceName }) =>
  client
    .get(`${apiPath}/availability?service=${serviceName}`)
    .then(x => x.data)
    .catch(err => console.log(err));

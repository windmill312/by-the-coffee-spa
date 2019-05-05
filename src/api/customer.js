import client, { subsystemCode } from './client';
import * as ApiPath from './apiPath';
import { clearLocalStorage } from '../utils/authUtils';

export const create = ({ name, identifier, password, birthDate }) =>
  client
    .post(ApiPath.CUSTOMER_SIGNUP, {
      name,
      identifier,
      password,
      subsystemCode,
      birthDate,
    })
    .then(x => {
      console.log(x);
      return x;
    });

export const login = ({ identifier, password }) =>
  client
    .post(ApiPath.CUSTOMER_LOGIN, {
      identifier,
      password,
      subsystemCode,
    })
    .then(x => {
      console.log(x);
      return x;
    });

export const logout = () =>
  client.post(
    ApiPath.CUSTOMER_LOGOUT.then(() => {
      clearLocalStorage();
    }),
  );

export const getCustomer = () => client.get(ApiPath.CUSTOMER_ME).then(x => x.data);

export const refreshToken = ({ token, customerUid }) => {
  client
    .post(ApiPath.CUSTOMER_REFRESH, {
      customerUid,
      token,
    })
    .then(x => {
      console.log(x);
      return x;
    });
};

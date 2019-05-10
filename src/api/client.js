import axios from 'axios';
import * as authUtils from '../utils/authUtils';
import { CUSTOMER_REFRESH } from './apiPath';

export const defaultUrl = {
  API_URL: `http://localhost:8080/gateway/api/v1`,
  FRONT_URL: `http://localhost:3000`,
};

const fetchClient = () => {
  const defaultOptions = {
    baseURL: `${defaultUrl.API_URL}`,
  };
  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(function(config) {
    const token = authUtils.getAccessToken();
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });

  instance.interceptors.response.use(response => response, function(error) {
    console.log(error);
    if (error.response.status === 401) {
      if (authUtils.isAuth()) {
        const refreshToken = authUtils.getRefreshToken();
        const customerUid = authUtils.getCustomerUid();
        axios
          .post(defaultOptions.baseURL + CUSTOMER_REFRESH, {
            refreshToken,
            customerUid,
          })
          .then(res => {
            authUtils.setAccessToken(res.data.accessToken);
            authUtils.setRefreshToken(res.data.refreshToken);
            authUtils.setCustomerUid(res.data.customerUid);
            authUtils.setAuth(true);
            console.log(res);
            if (error.config.method === 'get') {
              return Promise.resolve(
                instance.get(error.config.url, error.config.headers).then(result => result),
              );
            }
            if (error.config.method === 'post') {
              return Promise.resolve(
                instance
                  .post(error.config.url, error.request.data, error.config.headers)
                  .then(result => result),
              );
            }
            authUtils.clearLocalStorage();
            return Promise.reject(error);
          });
      }
    }
  });

  return instance;
};

export default fetchClient();

export const subsystemCode = 20;

import client from './client';
import * as apiPath from './apiPath';

export const getOAuthCode = ({ clientId, redirectUri }) =>
  client
    .get(`${apiPath.OAUTH_AUTHORIZE}?clientId=${clientId}&redirectUri=${redirectUri}`)
    .then(x => x.data);

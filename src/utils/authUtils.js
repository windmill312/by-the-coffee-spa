export function setAccessToken(token) {
  localStorage.setItem('accessToken', token);
}

export function getAccessToken() {
  return localStorage.getItem('accessToken');
}

export function setRefreshToken(token) {
  localStorage.setItem('refreshToken', token);
}

export function getRefreshToken() {
  return localStorage.getItem('refreshToken');
}

export function setCustomerUid(customerUid) {
  localStorage.setItem('customerUid', customerUid);
}

export function getCustomerUid() {
  return localStorage.getItem('customerUid');
}

export function isAuth() {
  return localStorage.getItem('isAuth');
}

export function setAuth(auth) {
  localStorage.setItem('isAuth', auth);
}

export function clearLocalStorage() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('customerUid');
  localStorage.removeItem('isAuth');
}

import axios from 'axios';
import AuthService from 'Services/AuthService';

export function axiosInstance () {
  let transformResponse = axios.defaults.transformResponse;
  transformResponse.push(function (data, headers) {
    if (data.error && data.error.status === 401) {
      AuthService.logout();
      window.location.href = AuthService.getLoginUrl();
    }
    return data;
  });
  return axios.create({
    headers: {
      Authorization: 'Bearer ' + AuthService.getToken()
    },
    transformResponse
  });
}

export function formatSeconds (seconds) {
  let start = 11, len = 8;
  if (3600 > seconds) {
    start = 14;
    len = 5;
  }
  return new Date(seconds * 1000).toISOString().substr(start, len);
}

export function formatNumber (number) {
  return number.toString().replace(/./g, function (c, i, a) {
    return i && c !== '.' && ((a.length - i) % 3 === 0) ? ',' + c : c;
  });
}
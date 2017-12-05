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

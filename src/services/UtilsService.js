import axios from 'axios';
import AuthService from 'Services/AuthService';

export function axiosInstance () {
  return axios.create({
    headers          : {
      Authorization: 'Bearer ' + AuthService.getToken()
    },
    transformResponse: [function (data) {
      let response = JSON.parse(data);
      if (response.error && response.error.status === 401) {
        AuthService.logout();
        window.location.href = AuthService.getLoginUrl();
      }
      return data;
    }]
  });
}

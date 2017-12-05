import * as ActionsConstants from 'Constants/ActionConstants';
import { axiosInstance } from 'Services/UtilsService';

function fetchCurrentUserRequest () {
  return {
    type: ActionsConstants.FETCH_CURRENT_USER_REQUEST
  };
}

function fetchCurrentUserResponse (response) {
  return {
    type: ActionsConstants.FETCH_CURRENT_USER_RESPONSE,
    response
  };
}

export function fetchCurrentUser () {
  return (dispatch) => {
    dispatch(fetchCurrentUserRequest());
    return axiosInstance().get(CONFIGS.API_URL + '/me')
      .then((res) => {
        dispatch(fetchCurrentUserResponse(res.data));
      });
  };
}

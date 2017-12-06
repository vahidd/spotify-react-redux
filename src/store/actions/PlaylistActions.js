import * as ActionsConstants from 'Constants/ActionConstants';
import { axiosInstance } from 'Services/UtilsService';

function fetchCurrentUserPlaylistsRequest () {
  return {
    type: ActionsConstants.FETCH_CURRENT_USER_PLAYLISTS_REQUEST
  };
}

function fetchCurrentUserPlaylistsResponse (response) {
  return {
    type: ActionsConstants.FETCH_CURRENT_USER_PLAYLISTS_RESPONSE,
    response
  };
}

export function fetchCurrentUserPlaylists (limit = 50, offset = 0) {
  return (dispatch) => {
    dispatch(fetchCurrentUserPlaylistsRequest());
    return axiosInstance().get(CONFIGS.API_URL + '/me/playlists', {params: {limit, offset}})
      .then((res) => {
        dispatch(fetchCurrentUserPlaylistsResponse(res.data));
      });
  };
}

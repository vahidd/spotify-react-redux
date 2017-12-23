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

export function showCreatePlayListModal () {
  return {
    type: ActionsConstants.SHOW_CREATE_PLAYLIST_MODAL
  };
}

export function hideCreatePlayListModal () {
  return {
    type: ActionsConstants.HIDE_CREATE_PLAYLIST_MODAL
  };
}

function createPlaylistRequest () {
  return {
    type: ActionsConstants.CREATE_PLAYLIST_REQUEST
  };
}

function createPlaylistResponse (response) {
  return {
    type: ActionsConstants.CREATE_PLAYLIST_RESPONSE,
    response
  };
}

export function createPlaylist (name, description = '', isPublic = true, collaborative = false) {
  return (dispatch, getState) => {
    let uri = CONFIGS.API_URL + `/users/${getState().user.profile.id}/playlists`;
    dispatch(createPlaylistRequest());
    return axiosInstance().post(uri, {name, description, 'public': isPublic, collaborative})
      .then((res) => {
        dispatch(createPlaylistResponse(res.data));
        dispatch(fetchCurrentUserPlaylists());
      });
  };
}

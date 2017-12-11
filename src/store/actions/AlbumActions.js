import * as ActionsConstants from 'Constants/ActionConstants';
import { axiosInstance } from 'Services/UtilsService';

function fetchAlbumRequest () {
  return {
    type: ActionsConstants.FETCH_ALBUM_REQUEST
  };
}

function fetchAlbumResponse (albumId, response) {
  return {
    type: ActionsConstants.FETCH_ALBUM_RESPONSE,
    albumId,
    response
  };
}

export function fetchAlbum (albumId) {
  return (dispatch) => {
    dispatch(fetchAlbumRequest());
    return axiosInstance().get(CONFIGS.API_URL + '/albums/' + albumId)
      .then((res) => {
        dispatch(fetchAlbumResponse(albumId, res.data));
      });
  };
}

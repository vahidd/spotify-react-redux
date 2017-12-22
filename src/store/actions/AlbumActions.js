import * as ActionsConstants from 'Constants/ActionConstants';
import { axiosInstance } from 'Services/UtilsService';
import { each } from 'lodash';

import { fetchArtist } from 'Actions/ArtistActions';

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

export function fetchAlbum (albumId, fetchArtists = false) {
  return (dispatch) => {
    dispatch(fetchAlbumRequest());
    return axiosInstance().get(CONFIGS.API_URL + '/albums/' + albumId)
      .then((res) => {
        if (fetchArtists)
          each(res.data.artists, (artist) => {
            dispatch(fetchArtist(artist.id));
          });
        dispatch(fetchAlbumResponse(albumId, res.data));
      });
  };
}

import * as ActionsConstants from 'Constants/ActionConstants';
import { axiosInstance } from 'Services/UtilsService';

function fetchArtistRequest () {
  return {
    type: ActionsConstants.FETCH_ARTIST_REQUEST
  };
}

function fetchArtistResponse (artistId, response) {
  return {
    type: ActionsConstants.FETCH_ARTIST_RESPONSE,
    artistId,
    response
  };
}

export function fetchArtist (artistId) {
  return (dispatch) => {
    dispatch(fetchArtistRequest());
    return axiosInstance().get(CONFIGS.API_URL + '/artists/' + artistId)
      .then((res) => {
        dispatch(fetchArtistResponse(artistId, res.data));
      });
  };
}

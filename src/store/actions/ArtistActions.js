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

export function fetchArtist (artistId, fetchSimilarArtists = false) {
  return (dispatch) => {
    dispatch(fetchArtistRequest());
    return axiosInstance().get(CONFIGS.API_URL + '/artists/' + artistId)
      .then((res) => {
        if (fetchSimilarArtists) {
          let artistResponse = {...res.data, similarArtists: []};
          axiosInstance().get(CONFIGS.API_URL + `/artists/${artistId}/related-artists`)
            .then((similarArtistsRes) => {
              artistResponse.similarArtists = similarArtistsRes.data.artists;
              dispatch(fetchArtistResponse(artistId, artistResponse));
            })
            .catch(() => {
              dispatch(fetchArtistResponse(artistId, artistResponse));
            });
        }
        else {
          dispatch(fetchArtistResponse(artistId, res.data));
        }
      });
  };
}

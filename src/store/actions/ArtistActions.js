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

function fetchSimilarArtistsRequest () {
  return {
    type: ActionsConstants.FETCH_SIMILAR_ARTISTS_REQUEST
  };
}

function fetchSimilarArtistsResponse (artistId, response) {
  return {
    type: ActionsConstants.FETCH_SIMILAR_ARTISTS_RESPONSE,
    artistId,
    response
  };
}

export function fetchSimilarArtists (artistId) {
  return (dispatch) => {
    dispatch(fetchSimilarArtistsRequest());
    return axiosInstance().get(CONFIGS.API_URL + `/artists/${artistId}/related-artists`)
      .then((res) => {
        dispatch(fetchSimilarArtistsResponse(artistId, res.data));
      });
  };
}

function fetchArtistTopTracksRequest () {
  return {
    type: ActionsConstants.FETCH_ARTIST_TOP_TRACKS_REQUEST
  };
}

function fetchArtistTopTracksResponse (artistId, response) {
  return {
    type: ActionsConstants.FETCH_ARTIST_TOP_TRACKS_RESPONSE,
    artistId,
    response
  };
}

export function fetchArtistTopTracks (artistId, country = 'US') {
  return (dispatch, getState) => {
    dispatch(fetchArtistTopTracksRequest());
    return axiosInstance().get(CONFIGS.API_URL + `/artists/${artistId}/top-tracks`, {params: {country}})
      .then((res) => {
        dispatch(fetchArtistTopTracksResponse(artistId, res.data));
      });
  };
}

import * as ActionsConstants from 'Constants/ActionConstants';

const defaultArtistState = {
  isFetching: false,
  artists: {}
};
const defaultTopTracksState = {
  isFetching: false,
  artists: {}
};
const defaultSimilarArtistsState = {
  isFetching: false,
  artists: {}
};

export function artist (state = defaultArtistState, action) {
  switch (action.type) {
    case ActionsConstants.FETCH_ARTIST_REQUEST:
      return {...state, isFetching: true};

    case ActionsConstants.FETCH_ARTIST_RESPONSE:
      return {
        ...state,
        isFetching: false,
        artists: {
          ...state.artists,
          [action.artistId]: action.response
        }
      };

    default:
      return state;
  }
}

export function topTracks (state = defaultTopTracksState, action) {
  switch (action.type) {
    case ActionsConstants.FETCH_ARTIST_TOP_TRACKS_REQUEST:
      return {
        ...state,
        ...state.topTracks,
        isFetching: true
      };

    case ActionsConstants.FETCH_ARTIST_TOP_TRACKS_RESPONSE:
      return {
        ...state,
        isFetching: false,
        artists: {
          ...state.artists,
          [action.artistId]: action.response.tracks
        }
      };

    default:
      return state;
  }
}

export function similarArtists (state = defaultSimilarArtistsState, action) {
  switch (action.type) {
    case ActionsConstants.FETCH_SIMILAR_ARTISTS_REQUEST:
      return {
        ...state,
        ...state.similarArtists,
        isFetching: true
      };

    case ActionsConstants.FETCH_SIMILAR_ARTISTS_RESPONSE:
      return {
        ...state,
        isFetching: false,
        artists: {
          ...state.artists,
          [action.artistId]: action.response.artists
        }
      };

    default:
      return state;
  }
}

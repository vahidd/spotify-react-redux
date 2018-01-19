import * as ActionsConstants from 'Constants/ActionConstants';

let defaultState = {
  isFetching    : false,
  artists       : {},
  similarArtists: {
    isFetching: false,
    artists   : {}
  },
  topTracks     : {
    isFetching: false,
    artists   : {}
  }
};

export function artist (state = defaultState, action) {
  switch (action.type) {

    case ActionsConstants.FETCH_ARTIST_REQUEST:
      return {...state, isFetching: true};

    case ActionsConstants.FETCH_ARTIST_RESPONSE:
      return {
        ...state,
        isFetching: false,
        artists   : {
          ...state.artists,
          [action.artistId]: action.response
        }
      };

    case ActionsConstants.FETCH_SIMILAR_ARTISTS_REQUEST:
      return {
        ...state,
        similarArtists: {
          ...state.similarArtists,
          isFetching: true
        }
      };

    case ActionsConstants.FETCH_SIMILAR_ARTISTS_RESPONSE:
      return {
        ...state,
        similarArtists: {
          isFetching: false,
          artists   : {
            ...state.similarArtists.artists,
            [action.artistId]: action.response.artists
          }
        }
      };

    case ActionsConstants.FETCH_ARTIST_TOP_TRACKS_REQUEST:
      return {
        ...state,
        topTracks: {
          ...state.topTracks,
          isFetching: true
        }
      };

    case ActionsConstants.FETCH_ARTIST_TOP_TRACKS_RESPONSE:
      return {
        ...state,
        topTracks: {
          isFetching: false,
          artists   : {
            ...state.topTracks.artists,
            [action.artistId]: action.response.tracks
          }
        }
      };

    default:
      return state;
  }
}

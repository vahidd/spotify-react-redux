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
const defaultAlbumsState = {
  isFetching: false,
  artist: {}
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

export function artistAlbums (state = defaultAlbumsState, action) {
  switch (action.type) {
    case ActionsConstants.FETCH_ARTIST_ALBUMS_REQUEST: {
      const newState = {...state, isFetching: true};
      if (action.group !== 'album') {
        return state;
      }
      if (typeof state.artist[action.artistId] === 'undefined') {
        newState.artist[action.artistId] = {
          isFetching: true,
          total: 0,
          items: []
        };
      }
      return {
        ...newState,
        isFetching: true,
        artist: {
          ...state.artist,
          [action.artistId]: {
            ...state.artist[action.artistId],
            isFetching: true
          }
        }
      };
    }
    case ActionsConstants.FETCH_ARTIST_ALBUMS_RESPONSE: {
      if (action.group !== 'album') {
        return state;
      }
      return {
        ...state,
        isFetching: false,
        artist: {
          ...state.artist,
          [action.artistId]: {
            ...state.artist[action.artistId],
            total: action.response.total,
            items: [...state.artist[action.artistId].items, ...action.response.items],
            isFetching: false
          }
        }
      };
    }
    default:
      return state;
  }
}

export function artistSingles (state = defaultAlbumsState, action) {
  switch (action.type) {
    case ActionsConstants.FETCH_ARTIST_ALBUMS_REQUEST: {
      const newState = {...state, isFetching: true};
      if (action.group !== 'single') {
        return state;
      }
      if (typeof state.artist[action.artistId] === 'undefined') {
        newState.artist[action.artistId] = {
          isFetching: true,
          total: 0,
          items: []
        };
      }
      return {
        ...newState,
        isFetching: true,
        artist: {
          ...state.artist,
          [action.artistId]: {
            ...state.artist[action.artistId],
            isFetching: true
          }
        }
      };
    }
    case ActionsConstants.FETCH_ARTIST_ALBUMS_RESPONSE: {
      if (action.group !== 'single') {
        return state;
      }
      return {
        ...state,
        isFetching: false,
        artist: {
          ...state.artist,
          [action.artistId]: {
            ...state.artist[action.artistId],
            total: action.response.total,
            items: [...state.artist[action.artistId].items, ...action.response.items],
            isFetching: false
          }
        }
      };
    }
    default:
      return state;
  }
}

export function artistAppearsOn (state = defaultAlbumsState, action) {
  switch (action.type) {
    case ActionsConstants.FETCH_ARTIST_ALBUMS_REQUEST: {
      const newState = {...state, isFetching: true};
      if (action.group !== 'appears_on') {
        return state;
      }
      if (typeof state.artist[action.artistId] === 'undefined') {
        newState.artist[action.artistId] = {
          isFetching: true,
          total: 0,
          items: []
        };
      }
      return {
        ...newState,
        isFetching: true,
        artist: {
          ...state.artist,
          [action.artistId]: {
            ...state.artist[action.artistId],
            isFetching: true
          }
        }
      };
    }
    case ActionsConstants.FETCH_ARTIST_ALBUMS_RESPONSE: {
      if (action.group !== 'appears_on') {
        return state;
      }
      return {
        ...state,
        isFetching: false,
        artist: {
          ...state.artist,
          [action.artistId]: {
            ...state.artist[action.artistId],
            total: action.response.total,
            items: [...state.artist[action.artistId].items, ...action.response.items],
            isFetching: false
          }
        }
      };
    }
    default:
      return state;
  }
}

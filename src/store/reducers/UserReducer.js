import { zipObject, times, constant } from 'lodash';

import * as ActionsConstants from 'Constants/ActionConstants';

const defaultState = {
  isFetching: false,
  profile: null,
  following: {
    artist: {
      isFetching: false,
      ids: {}
    },
    user: {
      isFetching: false,
      ids: {}
    }
  },
  savedTracks: {
    isFetching: false,
    tracks: {}
  }
};

export function user (state = defaultState, action) {
  let newState;
  switch (action.type) {
    case ActionsConstants.FETCH_CURRENT_USER_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case ActionsConstants.FETCH_CURRENT_USER_RESPONSE:
      return {
        ...state,
        isFetching: false,
        profile: action.response
      };

    case ActionsConstants.FOLLOW_REQUEST:
    case ActionsConstants.UNFOLLOW_REQUEST:
      newState = {...state};
      newState.following[action.idType].isFetching = true;
      return newState;

    case ActionsConstants.FETCH_FOLLOWING_STATUS_RESPONSE:
      newState = {...state};
      newState.following[action.idType].ids = {...state.following[action.idType].ids, ...zipObject(action.ids, action.response)};
      newState.following[action.idType].isFetching = false;
      return newState;

    case ActionsConstants.CONTAIN_TRACKS_REQUEST:
    case ActionsConstants.REMOVE_SAVED_TRACKS_REQUEST:
    case ActionsConstants.SAVE_TRACKS_REQUEST:
      return {
        ...state,
        savedTracks: {
          ...state.savedTracks,
          isFetching: true
        }
      };

    case ActionsConstants.CONTAIN_TRACKS_RESPONSE:
      return {
        ...state,
        savedTracks: {
          isFetching: false,
          tracks: {
            ...state.savedTracks.tracks,
            ...zipObject(action.tracks, action.response)
          }
        }
      };

    case ActionsConstants.SAVE_TRACKS_RESPONSE:
    case ActionsConstants.REMOVE_SAVED_TRACKS_RESPONSE:
      return {
        ...state,
        savedTracks: {
          isFetching: false,
          tracks: {
            ...state.savedTracks.tracks,
            ...zipObject(action.tracks, times(action.tracks.length, constant(action.type === ActionsConstants.SAVE_TRACKS_RESPONSE)))
          }
        }
      };

    default:
      return state;
  }
}

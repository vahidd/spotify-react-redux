import { zipObject } from 'lodash';

import * as ActionsConstants from 'Constants/ActionConstants';

let defaultState = {
  isFetching: false,
  profile   : null,
  following : {
    artist: {
      isFetching: false,
      ids       : {}
    },
    user  : {
      isFetching: false,
      ids       : {}
    }
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
      break;
    case ActionsConstants.FETCH_CURRENT_USER_RESPONSE:
      return {
        ...state,
        isFetching: false,
        profile   : action.response
      };
      break;
    case ActionsConstants.FOLLOW_REQUEST:
    case ActionsConstants.UNFOLLOW_REQUEST:
      newState = {...state};
      newState.following[action.idType].isFetching = true;
      return newState;
      break;
    case ActionsConstants.FETCH_FOLLOWING_STATUS_RESPONSE:
      newState = {...state};
      newState.following[action.idType].ids = {...state.following[action.idType].ids, ...zipObject(action.ids, action.response)};
      newState.following[action.idType].isFetching = false;
      return newState;
      break;
    default:
      return state;
  }
}

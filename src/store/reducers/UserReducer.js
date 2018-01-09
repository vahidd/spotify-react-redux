import { zipObject } from 'lodash';

import * as ActionsConstants from 'Constants/ActionConstants';

let defaultState = {
  isFetching: false,
  profile   : null,
  following : {
    artist: {},
    user  : {}
  }
};

export function user (state = defaultState, action) {
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
    case ActionsConstants.FETCH_FOLLOWING_STATUS_RESPONSE:
      let newState = {...state};
      newState.following[action.idType] = {...state.following[action.idType], ...zipObject(action.ids, action.response)};
      return newState;
      break;
    default:
      return state;
  }
}

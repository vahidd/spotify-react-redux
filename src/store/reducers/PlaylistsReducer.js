import * as ActionsConstants from 'Constants/ActionConstants';

let defaultState = {
  isFetching: false,
  data      : null
};

export function playlists (state = defaultState, action) {
  switch (action.type) {
    case ActionsConstants.FETCH_CURRENT_USER_PLAYLISTS_REQUEST:
      return {...state, isFetching: true};
      break;
    case ActionsConstants.FETCH_CURRENT_USER_PLAYLISTS_RESPONSE:
      return {
        ...state,
        isFetching: false,
        data      : action.response
      };
      break;
    default:
      return state;
  }
}

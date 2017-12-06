import * as ActionsConstants from 'Constants/ActionConstants';

let defaultState = {
  isFetching: false,
  data      : []
};

export function newReleases (state = defaultState, action) {
  switch (action.type) {
    case ActionsConstants.FETCH_NEW_RELEASES_REQUEST:
      return {
        ...state,
        isFetching: true
      };
      break;
    case ActionsConstants.FETCH_NEW_RELEASES_RESPONSE:
      return {
        ...state,
        isFetching: false,
        data      : [ ...state.data, ...action.response ]
      };
      break;
    default:
      return state;
  }
}

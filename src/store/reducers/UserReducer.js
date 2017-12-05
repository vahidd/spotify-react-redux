import * as ActionsConstants from 'Constants/ActionConstants';

let defaultState = {
  isFetching: false,
  profile   : null
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
    default:
      return state;
  }
}

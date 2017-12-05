import * as ActionsConstants from 'Constants/ActionConstants';

let defaultState = {
  isFetching: false,
  profile      : null
};

export function user (state = defaultState, action) {
  let newState;
  switch (action.type) {
    case ActionsConstants.FETCH_CURRENT_USER_REQUEST:
      newState = Object.assign(state, {});
      newState.isFetching = true;
      return newState;
      break;
    case ActionsConstants.FETCH_CURRENT_USER_RESPONSE:
      newState = Object.assign(state, {});
      newState.isFetching = false;
      newState.profile = action.response;
      return newState;
      break;
    default:
      return state;
  }
}

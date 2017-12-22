import * as ActionsConstants from 'Constants/ActionConstants';

let defaultState = {
  isFetching: false,
  artists    : {}
};

export function artist (state = defaultState, action) {
  switch (action.type) {
    case ActionsConstants.FETCH_ARTIST_REQUEST:
      return {...state, isFetching: true};
      break;
    case ActionsConstants.FETCH_ARTIST_RESPONSE:
      return {
        ...state,
        isFetching: false,
        artists    : {
          ...state.artists,
          [action.artistId]: action.response
        }
      };
      break;
    default:
      return state;
  }
}

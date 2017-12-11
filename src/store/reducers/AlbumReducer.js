import * as ActionsConstants from 'Constants/ActionConstants';

let defaultState = {
  isFetching: false,
  albums    : {}
};

export function album (state = defaultState, action) {
  switch (action.type) {
    case ActionsConstants.FETCH_ALBUM_REQUEST:
      return {...state, isFetching: true};
      break;
    case ActionsConstants.FETCH_ALBUM_RESPONSE:
      return {
        ...state,
        isFetching: false,
        albums    : {
          ...state.albums,
          [action.albumId]: action.response
        }
      };
      break;
    default:
      return state;
  }
}

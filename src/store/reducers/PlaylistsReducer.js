import * as ActionsConstants from 'Constants/ActionConstants';

let defaultState = {
  isFetching               : false,
  isCreatePlayListModalOpen: false,
  isCreatingPlaylist       : false,
  data                     : null
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
    case ActionsConstants.SHOW_CREATE_PLAYLIST_MODAL:
      return {
        ...state,
        isCreatePlayListModalOpen: true
      };
      break;
    case ActionsConstants.HIDE_CREATE_PLAYLIST_MODAL:
      return {
        ...state,
        isCreatePlayListModalOpen: false
      };
      break;
    case ActionsConstants.CREATE_PLAYLIST_REQUEST:
      return {
        ...state,
        isCreatingPlaylist: true
      };
      break;
    case ActionsConstants.CREATE_PLAYLIST_RESPONSE:
      return {
        ...state,
        isCreatingPlaylist: false
      };
      break;
    default:
      return state;
  }
}

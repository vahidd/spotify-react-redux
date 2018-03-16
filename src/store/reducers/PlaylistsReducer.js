import * as ActionsConstants from 'Constants/ActionConstants';

const defaultState = {
  isFetching: false,
  isCreatePlayListModalOpen: false,
  isCreatingPlaylist: false,
  data: null
};

export function playlists (state = defaultState, action) {
  switch (action.type) {
    case ActionsConstants.FETCH_CURRENT_USER_PLAYLISTS_REQUEST:
      return {...state, isFetching: true};
    case ActionsConstants.FETCH_CURRENT_USER_PLAYLISTS_RESPONSE:
      return {
        ...state,
        isFetching: false,
        data: action.response
      };
    case ActionsConstants.SHOW_CREATE_PLAYLIST_MODAL:
      return {
        ...state,
        isCreatePlayListModalOpen: true
      };
    case ActionsConstants.HIDE_CREATE_PLAYLIST_MODAL:
      return {
        ...state,
        isCreatePlayListModalOpen: false
      };
    case ActionsConstants.CREATE_PLAYLIST_REQUEST:
      return {
        ...state,
        isCreatingPlaylist: true
      };
    case ActionsConstants.CREATE_PLAYLIST_RESPONSE:
      return {
        ...state,
        isCreatingPlaylist: false
      };
    default:
      return state;
  }
}

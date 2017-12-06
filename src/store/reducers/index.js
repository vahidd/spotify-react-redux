import { combineReducers } from 'redux';

import { user } from 'Reducers/UserReducer';
import { playlists } from 'Reducers/PlaylistsReducer';

const rootReducer = combineReducers({
  user,
  playlists
});

export default rootReducer;

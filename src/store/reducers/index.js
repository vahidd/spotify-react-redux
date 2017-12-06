import { combineReducers } from 'redux';

import { user } from 'Reducers/UserReducer';
import { playlists } from 'Reducers/PlaylistsReducer';
import { newReleases } from 'Reducers/NewReleasesReducer';

const rootReducer = combineReducers({
  user,
  playlists,
  newReleases
});

export default rootReducer;

import { combineReducers } from 'redux';

import { user } from 'Reducers/UserReducer';
import { playlists } from 'Reducers/PlaylistsReducer';
import { newReleases } from 'Reducers/NewReleasesReducer';
import { album } from 'Reducers/AlbumReducer';

const rootReducer = combineReducers({
  user,
  playlists,
  newReleases,
  album
});

export default rootReducer;

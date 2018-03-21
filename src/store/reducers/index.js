import { combineReducers } from 'redux';

import { user } from 'Reducers/UserReducer';
import { playlists } from 'Reducers/PlaylistsReducer';
import { newReleases } from 'Reducers/NewReleasesReducer';
import { album } from 'Reducers/AlbumReducer';
import {
  artist,
  similarArtists,
  topTracks,
  artistAlbums,
  artistSingles,
  artistAppearsOn
} from 'Reducers/ArtistReducer';

const rootReducer = combineReducers({
  user,
  playlists,
  newReleases,
  album,
  artist,
  similarArtists,
  artistAlbums,
  artistSingles,
  artistAppearsOn,
  topTracks
});

export default rootReducer;

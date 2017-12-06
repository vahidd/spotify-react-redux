import React from 'react';
import { connect } from 'react-redux';

import CurrentUserPlaylists from 'Components/sidebar/YourPlaylists';
import {
  fetchCurrentUserPlaylists as fetchPlaylists,
  createPlaylist,
  showSidebarCreatePlaylist as showCreatePlaylist,
  hideSidebarCreatePlaylist as hideCreatePlaylist
} from 'Actions/PlaylistActions';

const mapStateToProps = state => ({
  playlists   : state.playlists,
  isCreateOpen: state.playlists.sidebarCreatePlaylistOpen
});

const UserPlaylistsContainer = props => <CurrentUserPlaylists {...props} />;

export default connect(
  mapStateToProps,
  {
    fetchPlaylists,
    createPlaylist,
    showCreatePlaylist,
    hideCreatePlaylist
  }
)(UserPlaylistsContainer);
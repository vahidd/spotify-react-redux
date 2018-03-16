import React from 'react';
import { connect } from 'react-redux';

import CurrentUserPlaylists from 'Components/sidebar/YourPlaylists';
import {
  fetchCurrentUserPlaylists as fetchPlaylists,
  createPlaylist,
  showCreatePlayListModal as showCreatePlaylist,
  hideCreatePlayListModal as hideCreatePlaylist
} from 'Actions/PlaylistActions';

const mapStateToProps = state => ({
  playlists: state.playlists,
  isCreatePlayListModalOpen: state.playlists.isCreatePlayListModalOpen,
  isCreatingPlaylist: state.playlists.isCreatingPlaylist
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

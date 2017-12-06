import React from 'react';
import { connect } from 'react-redux';

import CurrentUserPlaylists from 'Components/sidebar/YourPlaylists';
import { fetchCurrentUserPlaylists as fetchPlaylists } from 'Actions/PlaylistActions';

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const UserPlaylistsContainer = props => <CurrentUserPlaylists {...props} />;

export default connect(mapStateToProps, {fetchPlaylists})(UserPlaylistsContainer);
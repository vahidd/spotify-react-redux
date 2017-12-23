import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddIcon from 'react-icons/lib/md/add';

import styles from 'Styles/sidebar.scss';
import CreatePlaylistModal from 'Components/sidebar/CreatePlaylistModal';

class YourPlaylists extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      playListContainerNode: null
    };
  }

  componentDidMount () {
    this.props.fetchPlaylists();
  }

  componentDidUpdate () {
    if (this.refs.playlists && !this.state.playListContainerNode)
      this.setState({
        playListContainerNode: this.refs.playlists
      });
  }

  render () {
    let playlists = this.props.playlists.data;
    if (!playlists) {
      return null;
    }
    return <div>
      <h2 styleName="heading">
        Your Playlists
        <a href="#" onClick={this.props.showCreatePlaylist} styleName="add-icon">
          <AddIcon/>
        </a>
      </h2>
      <ul styleName="playlist" ref="playlists">
        {playlists.items.map((playlist, index) => {
          return <li key={index} styleName="playlist-item">
            <Link to={`/playlist/${playlist.id}`}>
              {playlist.name}
            </Link>
          </li>;
        })}
      </ul>
      <CreatePlaylistModal
        isOpen={this.props.isCreatePlayListModalOpen}
        open={this.props.showCreatePlaylist}
        create={this.props.createPlaylist}
        isCreating={this.props.isCreatingPlaylist}
        close={this.props.hideCreatePlaylist}/>
    </div>;
  }
}

YourPlaylists.propTypes = {
  playlists                : PropTypes.object.isRequired,
  fetchPlaylists           : PropTypes.func.isRequired,
  createPlaylist           : PropTypes.func.isRequired,
  showCreatePlaylist       : PropTypes.func.isRequired,
  hideCreatePlaylist       : PropTypes.func.isRequired,
  isCreatePlayListModalOpen: PropTypes.bool.isRequired,
  isCreatingPlaylist       : PropTypes.bool.isRequired
};

export default CSSModules(YourPlaylists, styles);
import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AddIcon from 'react-icons/lib/md/add';
import styles from 'Styles/sidebar.scss';
import CreatePlayList from 'Components/sidebar/CreatePlaylist';

class YourPlaylists extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      playListContainerNode: null
    };
  }

  componentDidMount () {
    this.props.fetchPlaylists();
    this.playlistCreate = this.playlistCreate.bind(this);
    this.playlistCreateCancel = this.playlistCreateCancel.bind(this);
  }

  componentDidUpdate () {
    if (this.refs.playlists && !this.state.playListContainerNode)
      this.setState({
        playListContainerNode: this.refs.playlists
      });
  }

  playlistCreate (val) {
    this.props.createPlaylist(val);
    this.props.hideCreatePlaylist();
  }

  playlistCreateCancel () {
    this.props.hideCreatePlaylist();
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
        {this.props.isCreateOpen && <li>
          <CreatePlayList
            isOpen={this.props.isCreateOpen}
            done={this.playlistCreate}
            cancel={this.playlistCreateCancel}
            containerNode={this.state.playListContainerNode}/>
        </li>}
        {playlists.items.map((playlist, index) => {
          return <li key={index} styleName="playlist-item">
            <Link to={`/playlist/${playlist.id}`}>
              {playlist.name}
            </Link>
          </li>;
        })}
      </ul>
    </div>;
  }
}

YourPlaylists.propTypes = {
  isCreateOpen      : PropTypes.bool.isRequired,
  playlists         : PropTypes.object.isRequired,
  fetchPlaylists    : PropTypes.func.isRequired,
  createPlaylist    : PropTypes.func.isRequired,
  hideCreatePlaylist: PropTypes.func.isRequired,
  showCreatePlaylist: PropTypes.func.isRequired
};

export default CSSModules(YourPlaylists, styles);
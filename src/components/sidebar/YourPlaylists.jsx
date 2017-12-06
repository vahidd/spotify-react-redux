import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';

import AddIcon from 'react-icons/lib/md/add';
import styles from 'Styles/sidebar.scss';

class YourPlaylists extends React.Component {
  componentDidMount () {
    this.props.fetchPlaylists();
  }

  render () {
    let playlists = this.props.playlists.data;
    if (!playlists) {
      return null;
    }
    return <div>
      <h2 styleName="heading">
        Your Playlists
        <a href="#" styleName="add-icon">
          <AddIcon/>
        </a>
      </h2>
      <ul styleName="playlist">
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

export default CSSModules(YourPlaylists, styles);
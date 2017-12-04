import React from 'react';
import CSSModules from 'react-css-modules';

import AddIcon from 'react-icons/lib/md/add';
import styles from 'Styles/sidebar.scss';

class YourPlaylists extends React.Component {
  render () {
    return <div>
      <h2 styleName="heading">
        Your Playlists
        <a href="#" styleName="add-icon">
          <AddIcon/>
        </a>
      </h2>
      <ul styleName="playlist">
        <li styleName="playlist-item"><a href="#">Snowboard Jams</a></li>
        <li styleName="playlist-item"><a href="#">Chill Work Music</a></li>
        <li styleName="playlist-item"><a href="#">NOFX</a></li>
        <li styleName="playlist-item"><a href="#">Workout Jams</a></li>
        <li styleName="playlist-item"><a href="#">All Jazz</a></li>
        <li styleName="playlist-item"><a href="#">Christmas Mix</a></li>
        <li styleName="playlist-item"><a href="#">Just Chill'n</a></li>
        <li styleName="playlist-item"><a href="#">Kids Mix</a></li>
        <li styleName="playlist-item"><a href="#">Progressive House</a></li>
        <li styleName="playlist-item"><a href="#">Rock & Alternative</a></li>
      </ul>
    </div>;
  }
}

export default CSSModules(YourPlaylists, styles);
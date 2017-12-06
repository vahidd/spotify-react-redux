import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'Styles/sidebar.scss';
import MirophoneIcon from 'react-icons/lib/ti/microphone';
import AlbumIcon from 'react-icons/lib/md/album';
import NoteIcon from 'react-icons/lib/md/music-note';

class YourCollection extends React.Component {
  render () {
    return <div>
      <h2 styleName="heading">Your Collection</h2>
      <ul styleName="list">
        <li>
          <a href="#" styleName="list-item">
            <MirophoneIcon styleName="list-icon"/>
            Artists
          </a>
        </li>
        <li>
          <a href="#" styleName="list-item">
            <AlbumIcon styleName="list-icon"/>
            Albums
          </a>
        </li>
        <li>
          <a href="#" styleName="list-item">
            <NoteIcon styleName="list-icon"/>
            Songs
          </a>
        </li>
      </ul>
    </div>;
  }
}

export default CSSModules(YourCollection, styles, {allowMultiple: true});
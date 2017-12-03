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
        <li styleName="list-item active">
          <MirophoneIcon styleName="list-icon"/>
          Artists
        </li>
        <li styleName="list-item">
          <AlbumIcon styleName="list-icon"/>
          Albums
        </li>
        <li styleName="list-item">
          <NoteIcon styleName="list-icon"/>
          Songs
        </li>
      </ul>
    </div>;
  }
}

export default CSSModules(YourCollection, styles, {allowMultiple: true});
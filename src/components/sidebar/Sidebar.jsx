import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'Styles/sidebar.scss';
import Discover from 'Components/sidebar/Discover';
import YourCollection from 'Components/sidebar/YourCollection';
import YourPlaylists from 'Containers/sidebar/UserPlaylistsContainer';
import CurrentUser from 'Containers/sidebar/CurrentUserContainer';

class Sidebar extends React.Component {
  render () {
    return <div styleName="sidebar">
      <Discover/>
      <YourCollection/>
      <YourPlaylists/>
      <CurrentUser/>
    </div>;
  }
}

export default CSSModules(Sidebar, styles);
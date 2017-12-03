import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'Styles/sidebar.scss';
import PlaylistIcon from 'react-icons/lib/md/queue-music';
import ChartIcon from 'react-icons/lib/md/insert-chart';
import RadioIcon from 'react-icons/lib/md/radio';

class Discover extends React.Component {
  render () {
    return <div>
      <h2 styleName="heading">Discover</h2>
      <ul styleName="list">
        <li styleName="list-item active">
          <PlaylistIcon styleName="list-icon"/>
          New Releases
        </li>
        <li styleName="list-item">
          <ChartIcon styleName="list-icon"/>
          Top Charts
        </li>
        <li styleName="list-item">
          <RadioIcon styleName="list-icon"/>
          Radio Stations
        </li>
      </ul>
    </div>;
  }
}

export default CSSModules(Discover, styles, {allowMultiple: true});
import React from 'react';
import CSSModules from 'react-css-modules';
import { NavLink } from 'react-router-dom';

import * as RouteConstants from 'Constants/RouteConstants';
import styles from 'Styles/sidebar.scss';
import PlaylistIcon from 'react-icons/lib/md/queue-music';
import NewIcon from 'react-icons/lib/md/fiber-new';
import RadioIcon from 'react-icons/lib/md/radio';

class Discover extends React.Component {

  constructor (props) {
    super(props);
    this.isNavLinkActive = this.isNavLinkActive.bind(this);
  }

  isNavLinkActive (match, location) {
    return location.pathname === '/' || ( match && match.path === '/new-releases' );
  }

  render () {
    return <div>
      <h2 styleName="heading">Discover</h2>
      <ul styleName="list">
        <li>
          <NavLink
            activeClassName={styles['list-item-active']}
            styleName="list-item"
            to={RouteConstants.NEW_RELEASES}
            isActive={this.isNavLinkActive}>
            <NewIcon styleName="list-icon"/>
            New Releases
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles['list-item-active']}
            styleName="list-item"
            to={RouteConstants.FEATURED_PLAYLISTS}>
            <PlaylistIcon styleName="list-icon"/>
            Featured Playlists
          </NavLink>
        </li>
        <li>
          <a styleName="list-item" href="#">
            <RadioIcon styleName="list-icon"/>
            Radio Stations
          </a>
        </li>
      </ul>
    </div>;
  }
}

export default CSSModules(Discover, styles, {allowMultiple: true});
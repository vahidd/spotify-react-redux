import React from 'react';
import CSSModules from 'react-css-modules';

import ArrowDownIcon from 'react-icons/lib/md/keyboard-arrow-down';
import styles from 'Styles/sidebar.scss';

class CurrentUser extends React.Component {
  render () {
    return <div styleName="current-user">
      <img styleName="current-user-avatar" src="https://randomuser.me/api/portraits/women/34.jpg"/>
      <span styleName="current-user-name">tobias</span>
      <span styleName="current-user-divider"/>
      <a styleName="current-user-actions-button">
        <ArrowDownIcon/>
      </a>
    </div>;
  }
}

export default CSSModules(CurrentUser, styles);
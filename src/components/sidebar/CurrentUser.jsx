import React from 'react';
import CSSModules from 'react-css-modules';

import ArrowDownIcon from 'react-icons/lib/md/keyboard-arrow-down';
import styles from 'Styles/sidebar.scss';

class CurrentUser extends React.Component {
  componentDidMount () {
    this.props.fetchCurrentUser();
  }

  render () {
    let {profile} = this.props.user;
    if (!profile) {
      return null;
    }
    return <div styleName="current-user">
      <img styleName="current-user-avatar" src={profile.images[0].url}/>
      <span styleName="current-user-name">{profile.display_name}</span>
      <span styleName="current-user-divider"/>
      <a styleName="current-user-actions-button">
        <ArrowDownIcon/>
      </a>
    </div>;
  }
}

export default CSSModules(CurrentUser, styles);
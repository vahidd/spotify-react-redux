import React from 'react';
import CSSModules from 'react-css-modules';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';

import * as RouteConstant from 'Constants/RouteConstants';
import ArrowDownIcon from 'react-icons/lib/md/keyboard-arrow-down';
import styles from 'Styles/sidebar.scss';

class CurrentUser extends React.Component {
  componentDidMount () {
    this.props.fetchCurrentUser();
  }

  menu () {
    return <Menu>
      <Menu.Item key="0">
        <a href="#">My Profile</a>
      </Menu.Item>
      <Menu.Divider/>
      <Menu.Item key="1">
        <Link styleName="current-user-actions-button" to={RouteConstant.LOGOUT}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>;
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
      <Dropdown overlay={this.menu()} trigger={['click']}>
        <a href="#" styleName="current-user-actions-button">
          <ArrowDownIcon/>
        </a>
      </Dropdown>
    </div>;
  }
}

export default CSSModules(CurrentUser, styles);
import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Icon, Button } from 'antd';

import { formatNumber } from 'Services/UtilsService';
import styles from 'Styles/artist.scss';

export default class Artist extends React.Component {
  componentDidMount () {
    this.props.fetchArtist();
  }

  menu () {
    return <Menu>
      <Menu.Item>
        <a href="#">Copy Artist Link</a>
      </Menu.Item>
    </Menu>;
  }

  render () {
    let {artist} = this.props;
    if (!artist.name) {
      return null;
    }
    return <div className={styles.artist}>
      <div className={styles.background} style={{backgroundImage: `url(${artist.images[0].url})`}}/>
      <div className={styles['background-overlay']}/>
      <div className={styles.content}>
        <header className={styles.header}>
          <span className={styles['followers-count']}>{formatNumber(artist.followers.total)} Followers</span>
          <h1 className={styles['artist-name']}>{artist.name}</h1>
          <Button className={styles['follow-button']} ghost>Follow</Button>
          <Dropdown overlay={this.menu()} trigger={['click']} placement="bottomLeft">
            <a href="#" className={styles['more-button']}>
              <Icon type="ellipsis"/>
            </a>
          </Dropdown>
        </header>
      </div>
    </div>;
  }
}

Artist.propTypes = {
  artist: PropTypes.shape({}).isRequired
};
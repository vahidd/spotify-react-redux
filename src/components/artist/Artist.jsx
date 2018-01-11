import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Icon, Button } from 'antd';

import SimilarArtists from 'Components/artist/SimilarArtists';
import { formatNumber, copyToClipboard } from 'Services/UtilsService';
import styles from 'Styles/artist.scss';

export default class Artist extends React.Component {
  componentDidMount () {
    this.props.fetchArtist();
    this.followClick = this.followClick.bind(this);
    this.copyArtistLink = this.copyArtistLink.bind(this);
    this.copyArtistUri = this.copyArtistUri.bind(this);
  }

  followClick () {
    switch (this.props.isFollowed) {
      case true:
        this.props.unfollow();
        break;
      case false:
        this.props.follow();
        break;
    }
  }

  copyArtistLink () {
    copyToClipboard(this.props.artist.external_urls.spotify);
  }

  copyArtistUri () {
    copyToClipboard(this.props.artist.uri);
  }

  menu () {
    return <Menu>
      <Menu.Item>
        <a href="#" onClick={this.followClick}>{this.props.isFollowed === true ? 'Unfollow' : 'Follow'}</a>
      </Menu.Item>
      <Menu.Divider/>
      <Menu.Item>
        <a href="#" onClick={this.copyArtistLink}>Copy Artist Link</a>
      </Menu.Item>
      <Menu.Divider/>
      <Menu.Item>
        <a href="#" onClick={this.copyArtistUri}>Copy Artist URI</a>
      </Menu.Item>
    </Menu>;
  }

  followButton () {
    return <Button
      className={styles['follow-button']}
      type={this.props.isFollowed === true ? 'primary' : 'default'}
      ghost={this.props.isFollowed === false}
      onClick={this.followClick}
      disabled={this.props.isFollowed === null}
      loading={this.props.isFollowOrUnfollowing}
    >{this.props.isFollowed === true ? 'Unfollow' : 'Follow'}</Button>;
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
          {this.followButton()}
          <Dropdown overlay={this.menu()} trigger={['click']} placement="bottomLeft">
            <a href="#" className={styles['more-button']}>
              <Icon type="ellipsis"/>
            </a>
          </Dropdown>
          <SimilarArtists artist={this.props.artist}/>
        </header>
      </div>
    </div>;
  }
}

Artist.propTypes = {
  artist               : PropTypes.shape({}).isRequired,
  follow               : PropTypes.func.isRequired,
  unfollow             : PropTypes.func.isRequired,
  isFollowed           : PropTypes.oneOf([true, false, null]),
  isFollowOrUnfollowing: PropTypes.oneOf([true, false])
};
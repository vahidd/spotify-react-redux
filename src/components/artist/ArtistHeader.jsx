import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Icon, Button } from 'antd';

import SimilarArtists from 'Components/artist/SimilarArtists';
import { formatNumber, copyToClipboard } from 'Services/UtilsService';
import styles from 'Styles/artist.scss';

/* eslint-disable react/require-optimization */
export default class ArtistHeader extends React.Component {
  constructor (props) {
    super(props);
    this.handleFollowButton = this.handleFollowButton.bind(this);
    this.handleCopyArtistLink = this.handleCopyArtistLink.bind(this);
    this.handleCopyArtistURI = this.handleCopyArtistURI.bind(this);
  }

  handleFollowButton () {
    switch (this.props.isFollowed) {
      case true:
        this.props.unfollow();
        break;
      case false:
        this.props.follow();
        break;
    }
  }

  handleCopyArtistLink () {
    copyToClipboard(this.props.artist.external_urls.spotify);
  }

  handleCopyArtistURI () {
    copyToClipboard(this.props.artist.uri);
  }

  artistMenuOptions () {
    return (
      <Menu>
        <Menu.Item>
          <a
            href="#"
            onClick={this.handleFollowButton}
          >
            {this.props.isFollowed === true ? 'Unfollow' : 'Follow'}
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a
            href="#"
            onClick={this.handleCopyArtistLink}
          >
            Copy Artist Link
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a
            href="#"
            onClick={this.handleCopyArtistURI}
          >
            Copy Artist URI
          </a>
        </Menu.Item>
      </Menu>
    );
  }

  followButton () {
    return (
      <Button
        className={styles['follow-button']}
        type={this.props.isFollowed === true ? 'primary' : 'default'}
        ghost={this.props.isFollowed === false}
        onClick={this.handleFollowButton}
        disabled={this.props.isFollowed === null}
        loading={this.props.isFollowOrUnfollowing}
      >
        {this.props.isFollowed === true ? 'Unfollow' : 'Follow'}
      </Button>
    );
  }

  artistMenu () {
    return (
      <Dropdown
        overlay={this.artistMenuOptions()}
        trigger={['click']}
        placement="bottomLeft"
      >
        <a
          href="#"
          className={styles['more-button']}
        >
          <Icon type="ellipsis" />
        </a>
      </Dropdown>
    );
  }

  render () {
    let {artist} = this.props;
    if (!artist.name) {
      return null;
    }
    return (
      <header className={styles.header}>
        <span className={styles['followers-count']}>
          {`${formatNumber(artist.followers.total)} Followers`}
        </span>
        <h1 className={styles['artist-name']}>
          {artist.name}
        </h1>
        {this.followButton()}
        {this.artistMenu()}
        <SimilarArtists artists={this.props.similarArtists} />
      </header>
    );
  }
}

ArtistHeader.propTypes = {
  artist: PropTypes.object.isRequired,
  similarArtists: PropTypes.array.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  isFollowed: PropTypes.oneOf([true, false, null]),
  isFollowOrUnfollowing: PropTypes.oneOf([true, false]).isRequired
};

ArtistHeader.defaultProps = {
  isFollowed: null
};

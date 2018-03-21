import React from 'react';
import PropTypes from 'prop-types';

import ArtistHeader from 'Components/artist/ArtistHeader';
import ArtistAlbums from 'Components/artist/ArtistAlbums';
import ArtistSingles from 'Components/artist/ArtistSingles';
import ArtistAppearsOn from 'Components/artist/ArtistAppearsOn';
import styles from 'Styles/artist.scss';

/* eslint-disable react/require-optimization */
export default class Artist extends React.Component {
  componentDidMount () {
    const {props} = this;
    props.fetchArtist();
    props.fetchSimilarArtists();
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.match.url !== this.props.match.url) {
      nextProps.fetchArtist();
      nextProps.fetchSimilarArtists();
    }
  }

  render () {
    const {artist} = this.props;
    if (!artist.name) {
      return null;
    }
    return (
      <div className={styles.artist}>
        <div
          className={styles.background}
          style={{backgroundImage: `url(${artist.images[0].url})`}}
        />
        <div className={styles['background-overlay']} />
        <div className={styles.content}>
          <ArtistHeader
            artist={this.props.artist}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFollowed={this.props.isFollowed}
            isFollowOrUnfollowing={this.props.isFollowOrUnfollowing}
            similarArtists={this.props.similarArtists}
          />
          <ArtistAlbums
            albums={this.props.albums}
            fetch={this.props.fetchAlbum}
          />
          <ArtistSingles
            albums={this.props.singles}
            fetch={this.props.fetchSingle}
          />
          <ArtistAppearsOn
            albums={this.props.appearsOn}
            fetch={this.props.fetchAppearsOn}
          />
        </div>
      </div>
    );
  }
}

Artist.propTypes = {
  fetchArtist: PropTypes.func.isRequired,
  fetchSimilarArtists: PropTypes.func.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  fetchAlbum: PropTypes.func.isRequired,
  fetchSingle: PropTypes.func.isRequired,
  fetchAppearsOn: PropTypes.func.isRequired,
  artist: PropTypes.object.isRequired,
  albums: PropTypes.object.isRequired,
  singles: PropTypes.object.isRequired,
  appearsOn: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  similarArtists: PropTypes.array.isRequired,
  isFollowed: PropTypes.oneOf([true, false, null]),
  isFollowOrUnfollowing: PropTypes.oneOf([true, false])
};

Artist.defaultProps = {
  isFollowed: null,
  isFollowOrUnfollowing: false
};

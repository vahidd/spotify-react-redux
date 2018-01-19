import React from 'react';
import PropTypes from 'prop-types';
import styles from 'Styles/album.scss';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import ReactPlaceholder from 'react-placeholder';
import { mapValues } from 'lodash';

import Placeholder from 'Components/album/AlbumPlaceholder';
import Image from 'Components/common/Image';
import Track from 'Components/album/Track';

export default class Album extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      containAlbumTracksFetched: false
    };
  }

  componentDidMount () {
    this.props.fetchAlbum();
  }

  componentWillReceiveProps (nextProps) {
    if (this.isReady(nextProps.album, nextProps.artists) && !this.state.containAlbumTracksFetched) {
      this.setState({
        containAlbumTracksFetched: true
      });
      this.props.containTracks(Object.values(mapValues(nextProps.album.tracks.items, 'id')));
    }
  }

  isReady (customAlbum = null, customArtists = null) {
    let
      album = customAlbum === null ? this.props.album : customAlbum,
      artists = customArtists === null ? this.props.artists : customArtists;
    return !!(album.name && artists[0]);
  }

  toggleSaveTrack (track) {
    if (this.props.savedTracks[track.id]) {
      this.props.removeSavedTrack([track.id]);
    } else {
      this.props.saveTracks([track.id]);
    }
  }

  cover () {
    let {album} = this.props;
    return <Image
      src={album.images[1].url}
      containerClassName={styles['image-container']}
      className={styles.cover}>
    </Image>;
  }

  info () {
    let {album} = this.props;
    return <div>
      <h2 className={styles['album-title']}>{album.name}</h2>
      {album.artists.map((artist, index) => {
        return <h1 key={index} className={styles['album-artist']}>
          <Link to={'/artist/' + artist.id}>{artist.name}</Link>
          {album.artists.length !== (index + 1) ? ', ' : ''}
        </h1>;
      })}
      <p className={styles['label']}>{album.label}</p>
    </div>;
  }

  tracks () {
    let {album} = this.props;
    return <div>
      <span className={styles['track-count']}>{album.tracks.total} Track(s)</span>
      <ul className={styles.tracks}>
        {album.tracks.items.map((track, key) => {
          let isSaved = this.props.isSavedTracksFetching || typeof this.props.savedTracks[track.id] === 'undefined'
            ? null
            : this.props.savedTracks[track.id];
          return <li key={key}>
            <Track track={track} isSaved={isSaved} toggleSaveTrack={() => {this.toggleSaveTrack(track);}}/>
          </li>;
        })}
      </ul>
    </div>;
  }

  component () {
    if (!this.isReady()) {
      return <span/>;
    }
    return <div className={styles.album}>
      <Row gutter={40}>
        <Col span={6}>
          {this.cover()}
        </Col>
        <Col span={18}>
          {this.info()}
          {this.tracks()}
        </Col>
      </Row>
    </div>;
  }

  render () {
    return <ReactPlaceholder ready={this.isReady()} customPlaceholder={<Placeholder/>}>
      {this.component()}
    </ReactPlaceholder>;
  }
}

Album.propTypes = {
  containTracks        : PropTypes.func.isRequired,
  saveTracks           : PropTypes.func.isRequired,
  removeSavedTrack     : PropTypes.func.isRequired,
  album                : PropTypes.shape({}).isRequired,
  artists              : PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isSavedTracksFetching: PropTypes.bool.isRequired
};
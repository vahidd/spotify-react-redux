import React from 'react';
import PropTypes from 'prop-types';
import styles from 'Styles/album.scss';
import { Row, Col } from 'antd';

import Image from 'Components/common/Image';
import Track from 'Components/album/Track';

export default class Album extends React.Component {
  componentDidMount () {
    this.props.fetchAlbum();
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
      <h1 className={styles['album-artist']}>{album.artists[0].name}</h1>
      <p className={styles['label']}>{album.label}</p>
    </div>;
  }

  tracks () {
    let {album} = this.props;
    return <div>
      <span className={styles['track-count']}>{album.tracks.total} Track(s)</span>
      <ul className={styles.tracks}>
        {album.tracks.items.map((track, key) => {
          return <li key={key}>
            <Track track={track}/>
          </li>;
        })}
      </ul>
    </div>;
  }

  render () {
    let {album} = this.props, {artists} = this.props;
    if (!album.name || !artists[0]) {
      return null;
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
}

Album.propTypes = {
  album  : PropTypes.shape({}).isRequired,
  artists: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import styles from 'Styles/artist.scss';
import { chunk } from 'lodash';

export default class ArtistSingles extends React.Component {
  constructor () {
    super();
    this.state = {
      fetchCount: 0
    };
    this.columnsCount = 12;
    this.renderAlbum = this.renderAlbum.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  componentWillMount () {
    this.setState({fetchCount: this.columnsCount});
    this.props.fetch(this.columnsCount, 0);
  }

  renderAlbum (album) {
    /* eslint-disable react/jsx-max-depth */
    if (typeof album.images[1] === 'undefined') {
      return null;
    }
    return (
      <Col
        key={album.id}
        span={4}
      >
        <Link
          to={`/album/${album.id}`}
          className={styles.album}
        >
          <div
            className={styles['album-image-container']}
          >
            <img
              className={styles['album-image']}
              src={album.images[1].url}
            />
          </div>
          <p className={styles['album-name']}>
            {album.name}
          </p>
        </Link>
      </Col>
    );
  }

  handleLoadMore () {
    this.setState((prevState) => {
      this.props.fetch(this.columnsCount, prevState.fetchCount);
      return {
        fetchCount: prevState.fetchCount + this.columnsCount
      };
    });
  }

  loadMore () {
    const {total, isFetching} = this.props.albums;
    if (total === 0 || this.state.fetchCount >= total) {
      return null;
    }
    return (
      <div className={styles['load-more']}>
        <Button
          ghost
          loading={isFetching}
          onClick={this.handleLoadMore}
        >
          Load More
        </Button>
      </div>
    );
  }

  render () {
    const {items} = this.props.albums;
    if (!items || !items.length) {
      return null;
    }
    const rows = chunk(items, this.columnsCount / 2);
    /* eslint-disable react/no-array-index-key */
    return (
      <div className={styles['album-container']}>
        <h2 className={styles['section-title']}>
          Singles
        </h2>
        {rows.map((row, index) => {
          return (
            <Row
              gutter={0}
              key={index}
            >
              {row.map((album) => {
                return this.renderAlbum(album);
              })}
            </Row>
          );
        })}
        {this.loadMore()}
      </div>);
  }
}

ArtistSingles.propTypes = {
  fetch: PropTypes.func.isRequired,
  albums: PropTypes.object.isRequired
};

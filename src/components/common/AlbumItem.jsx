import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { each } from 'lodash';
import styles from 'Styles/album-item.scss';
import CSSModules from 'react-css-modules';

class AlbumItem extends React.Component {

  getImage () {
    let imageUrl = '';
    each(this.props.album.images, (image) => {
      if (image.width === 300) {
        imageUrl = image.url;
        return false;
      }
    });
    return imageUrl;
  }

  render () {
    let {album} = this.props;
    return <div styleName="container">
      <Link to={`/album/${album.id}`}>
        <img src={this.getImage()}/>
        <span styleName="name">{album.name}</span>
      </Link>
      <div>
        {album.artists.map((artist, index) => {
          return <Link key={index} to={`/artist/${artist.id}`} styleName="artist">
            {artist.name}
            {index + 1 !== album.artists.length && ', '}
          </Link>;
        })}
      </div>
    </div>;
  }
}

AlbumItem.propTypes = {
  album: PropTypes.object.isRequired
};

export default CSSModules(AlbumItem, styles);
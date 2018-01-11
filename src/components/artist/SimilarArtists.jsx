import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from 'Styles/artist.scss';

export default class SimilarArtists extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      showAll: false
    };
    this.showAll = this.showAll.bind(this);
  }

  showAll () {
    this.setState({
      showAll: true
    });
  }

  render () {
    if (!this.props.artist.similarArtists) {
      return null;
    }
    let similarArtists = this.state.showAll ? this.props.artist.similarArtists : this.props.artist.similarArtists.slice(0, 5);
    return <div className={styles['similar-artists']}>
      <h3>Similar Artists</h3>
      {similarArtists.map((artist, index) => {
        return <Link to={'/artist/' + artist.id} key={index}>{artist.name}</Link>;
      })}
      {!this.state.showAll && this.props.artist.similarArtists.length > 5 ?
        <button className={styles['show-more']} onClick={this.showAll}>...</button> : ''}
    </div>;
  }
}

SimilarArtists.propTypes = {
  artist: PropTypes.shape({}).isRequired
};
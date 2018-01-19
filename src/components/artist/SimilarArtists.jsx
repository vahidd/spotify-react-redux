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
    let {artists} = this.props;
    if (!artists) {
      return null;
    }
    let similarArtists = this.state.showAll ? artists : artists.slice(0, 5);
    return <div className={styles['similar-artists']}>
      <h3>Similar Artists</h3>
      {similarArtists.map((artist, index) => {
        return <Link to={'/artist/' + artist.id} key={index}>{artist.name}</Link>;
      })}
      {!this.state.showAll && artists.length > 5 ?
        <button className={styles['show-more']} onClick={this.showAll}>...</button> : ''}
    </div>;
  }
}

SimilarArtists.propTypes = {
  artists: PropTypes.array.isRequired
};
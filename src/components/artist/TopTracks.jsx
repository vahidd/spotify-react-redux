import React from 'react';
import PropTypes from 'prop-types';

import styles from 'Styles/artist.scss';

export default class TopTracks extends React.Component {

  track(track, index){
    return <li key={index}>
      {track.name}
    </li>;
  }

  render () {
    let {tracks} = this.props;
    if( !tracks.length ){
      return null;
    }
    return <ul>
      {tracks.map( (track, index) => {
        return this.track(track, index);
      } )}
    </ul>;
  }
}

TopTracks.propTypes = {
  tracks: PropTypes.array.isRequired
};
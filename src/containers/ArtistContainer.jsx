import React from 'react';
import { connect } from 'react-redux';

import { fetchArtist } from 'Actions/ArtistActions';
import { getArtist } from 'Src/store/selectors/CommonSelectors';
import Artist from 'Components/artist/Artist';

const mapStateToProps = () => {
  return (state, props) => {
    let artist = getArtist(state, props);
    return {
      artist
    };
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchArtist: () => {
      dispatch(fetchArtist(props.match.params.id, true));
    }
  };
};

const ArtistContainer = props => <Artist {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);
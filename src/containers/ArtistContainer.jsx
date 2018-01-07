import React from 'react';
import { connect } from 'react-redux';
import Artist from 'Components/artist/Artist';

const mapStateToProps = () => {
  return (state, props) => {
    return {};
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const ArtistContainer = props => <Artist {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);
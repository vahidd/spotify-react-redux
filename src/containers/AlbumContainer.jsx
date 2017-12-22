import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbum } from 'Actions/AlbumActions';
import { getAlbum, getAlbumArtists } from 'Src/store/selectors/CommonSelectors';
import Album from 'Components/album/Album';

const mapStateToProps = () => {
  return (state, props) => {
    let
      album = getAlbum(state, props),
      artists = getAlbumArtists(state, album);
    return {
      album,
      artists
    };
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAlbum: () => {
      dispatch(fetchAlbum(props.match.params.id, true));
    }
  };
};

const NewReleasesContainer = props => <Album {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(NewReleasesContainer);
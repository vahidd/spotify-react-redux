import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbum } from 'Actions/AlbumActions';
import { containTracks, saveTracks, removeTracks } from 'Actions/UserActions';
import { getAlbum, getAlbumArtists, getSavedTracks, isSavedTracksFetching } from 'Src/store/selectors/CommonSelectors';
import Album from 'Components/album/Album';

const mapStateToProps = () => {
  return (state, props) => {
    let
      album = getAlbum(state, props),
      artists = getAlbumArtists(state, album);
    return {
      album,
      artists,
      savedTracks          : getSavedTracks(state),
      isSavedTracksFetching: isSavedTracksFetching(state)
    };
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAlbum      : () => {
      dispatch(fetchAlbum(props.match.params.id, true));
    },
    containTracks   : (tracks) => {
      dispatch(containTracks(tracks));
    },
    saveTracks      : (tracks) => {
      dispatch(saveTracks(tracks));
    },
    removeSavedTrack: (tracks) => {
      dispatch(removeTracks(tracks));
    }
  };
};

const AlbumContainer = props => <Album {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(AlbumContainer);
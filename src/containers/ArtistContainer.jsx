import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchArtist, fetchSimilarArtists, fetchArtistAlbums } from 'Actions/ArtistActions';
import { fetchFollowingStatus, follow, unfollow } from 'Actions/UserActions';
import {
  getArtist,
  getIsFollowing,
  getFollowActionFetchingStatus,
  getSimilarArtists,
  getArtistAlbums,
  getArtistAppearsOn,
  getArtistSingles
} from 'Src/store/selectors/CommonSelectors';
import Artist from 'Components/artist/Artist';

const mapStateToProps = () => {
  return (state, props) => {
    let artist = getArtist(state, props);
    return {
      artist,
      similarArtists: getSimilarArtists(state, props),
      isFollowed: getIsFollowing(state, props, 'artist'),
      albums: getArtistAlbums(state, props) || {},
      singles: getArtistSingles(state, props) || {},
      appearsOn: getArtistAppearsOn(state, props) || {},
      isFollowOrUnfollowing: getFollowActionFetchingStatus(state, 'artist')
    };
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchArtist: () => {
      dispatch(fetchFollowingStatus([props.match.params.id], 'artist'));
      dispatch(fetchArtist(props.match.params.id));
    },
    fetchSimilarArtists: () => {
      dispatch(fetchSimilarArtists(props.match.params.id));
    },
    fetchAlbum: (limit, offset) => {
      dispatch(fetchArtistAlbums(props.match.params.id, 'album', limit, offset));
    },
    fetchSingle: (limit, offset) => {
      dispatch(fetchArtistAlbums(props.match.params.id, 'single', limit, offset));
    },
    fetchAppearsOn: (limit, offset) => {
      dispatch(fetchArtistAlbums(props.match.params.id, 'appears_on', limit, offset));
    },
    follow: () => {
      dispatch(follow([props.match.params.id], 'artist'));
    },
    unfollow: () => {
      dispatch(unfollow([props.match.params.id], 'artist'));
    }
  };
};

const ArtistContainer = props => <Artist {...props} />;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtistContainer));

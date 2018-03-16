import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchArtist, fetchSimilarArtists, fetchArtistTopTracks } from 'Actions/ArtistActions';
import { fetchFollowingStatus, follow, unfollow } from 'Actions/UserActions';
import {
  getArtist,
  getIsFollowing,
  getFollowActionFetchingStatus,
  getSimilarArtists,
  getArtistTopTracks
} from 'Src/store/selectors/CommonSelectors';
import Artist from 'Components/artist/Artist';

const mapStateToProps = () => {
  return (state, props) => {
    let artist = getArtist(state, props);
    return {
      artist,
      similarArtists: getSimilarArtists(state, props),
      topTracks: getArtistTopTracks(state, props),
      isFollowed: getIsFollowing(state, props, 'artist'),
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
    fetchTopTracks: () => {
      dispatch(fetchArtistTopTracks(props.match.params.id));
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

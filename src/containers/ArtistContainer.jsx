import React from 'react';
import { connect } from 'react-redux';

import { fetchArtist } from 'Actions/ArtistActions';
import { fetchFollowingStatus, follow, unfollow } from 'Actions/UserActions';
import { getArtist, getIsFollowing, getFollowActionFetcingStatus } from 'Src/store/selectors/CommonSelectors';
import Artist from 'Components/artist/Artist';

const mapStateToProps = () => {
  return (state, props) => {
    let artist = getArtist(state, props);
    return {
      artist,
      isFollowed           : getIsFollowing(state, props, 'artist'),
      isFollowOrUnfollowing: getFollowActionFetcingStatus(state, 'artist')
    };
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchArtist: () => {
      dispatch(fetchFollowingStatus([props.match.params.id], 'artist'));
      dispatch(fetchArtist(props.match.params.id, true));
    },
    follow     : () => {
      dispatch(follow([props.match.params.id], 'artist'));
    },
    unfollow   : () => {
      dispatch(unfollow([props.match.params.id], 'artist'));
    }
  };
};

const ArtistContainer = props => <Artist {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);
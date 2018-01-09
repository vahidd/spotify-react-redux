import React from 'react';
import { connect } from 'react-redux';

import { fetchArtist } from 'Actions/ArtistActions';
import { fetchFollowingStatus } from 'Actions/UserActions';
import { getArtist, getIsFollowing } from 'Src/store/selectors/CommonSelectors';
import Artist from 'Components/artist/Artist';

const mapStateToProps = () => {
  return (state, props) => {
    let artist = getArtist(state, props);
    return {
      artist,
      isFollowing: getIsFollowing(state, props, 'artist')
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

    },
    unfollow   : () => {

    }
  };
};

const ArtistContainer = props => <Artist {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);
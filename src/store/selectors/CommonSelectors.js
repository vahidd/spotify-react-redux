import { isEmpty } from 'lodash';

export const getAlbum = (state, props) => {
  return state.album.albums[props.match.params.id] || {};
};

export const getAlbumArtists = (state, album) => {
  if (isEmpty(album)) {
    return [];
  }
  let artists = [];
  album.artists.forEach((artist) => {
    if (state.artist.artists[artist.id]) {
      artists.push(state.artist.artists[artist.id]);
    }
  });
  return artists;
};

export const getArtist = (state, props) => {
  return state.artist.artists[props.match.params.id] || {};
};

export const getIsFollowing = (state, props, type) => {
  let isFollowing = state.user.following[type].ids[props.match.params.id];
  return typeof isFollowing === 'undefined' ? null : isFollowing;
};

export const getFollowActionFetchingStatus = (state, type) => {
  return state.user.following[type].isFetching;
};

export const isSavedTracksFetching = (state) => {
  return state.user.savedTracks.isFetching;
};

export const getSavedTracks = (state) => {
  return state.user.savedTracks.tracks;
};

export const getSimilarArtists = (state, props) => {
  let similar = state.similarArtists.artists[props.match.params.id];
  return similar || [];
};

export const getArtistTopTracks = (state, props) => {
  let tracks = state.topTracks.artists[props.match.params.id];
  return tracks || [];
};

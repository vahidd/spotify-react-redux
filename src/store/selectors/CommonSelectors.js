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
  let isFollowing = state.user.following[type][props.match.params.id];
  return typeof isFollowing === 'undefined' ? null : isFollowing;
};
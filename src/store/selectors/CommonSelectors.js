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
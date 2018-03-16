export default class AuthService {
  static get allScopes () {
    return [
      'playlist-read-private',
      'playlist-read-collaborative',
      'playlist-modify-public',
      'playlist-modify-private',
      'streaming',
      'ugc-image-upload',
      'user-follow-modify',
      'user-follow-read',
      'user-library-read',
      'user-library-modify',
      'user-read-private',
      'user-read-birthdate',
      'user-read-email',
      'user-top-read',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'user-read-recently-played'
    ];
  }

  static get _tokenKey () {
    return '_auth_token';
  }

  static isLoggedIn () {
    return this.getToken() !== null;
  }

  static getToken () {
    return localStorage.getItem(this._tokenKey);
  }

  static setToken (token) {
    localStorage.setItem(this._tokenKey, token);
  }

  static logout () {
    localStorage.removeItem(this._tokenKey);
  }

  static getLoginUrl () {
    let queryArgs = [];
    queryArgs.push(`client_id=${CONFIGS.CLIENT_ID}`);
    queryArgs.push(`response_type=token`);
    queryArgs.push(`redirect_uri=${encodeURIComponent(`${window.location.protocol}//${window.location.host}/auth-callback`)}`);
    queryArgs.push(`scope=${this.allScopes.join(' ')}`);
    return `https://accounts.spotify.com/authorize/?${queryArgs.join('&')}`;
  }
}

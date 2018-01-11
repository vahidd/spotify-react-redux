
# spotify-react-redux
React redux implementation of Spotify based on Spotify's web APIs. This client uses spotify's web API, The client is gonna have all spotify's feature except the playback as there is no way to play on the web. Recently they've added web [playback SDK](https://beta.developer.spotify.com/documentation/web-playback-sdk/) but the SDK does not allow you to play a specific song, you are only able to do these things:

 - Create a new player in Spotify Connect
 - Stream an audio track in supported browsers
 - Get metadata for the current track
 - Get metadata about the user’s listening session
 - Control local playback (pause, resume, volume, etc)

### How to setup
1- Get the project:
```sh
$ git clone https://github.com/vahidd/spotify-react-redux.git
```
2- Install the dependencies:
```sh
$ cd spotify-react-redux && npm install
```
3- Rename the .env-template file to .env and open it on an editor and fill the lines with your application configs.

4- Then start the project:
```sh
$ npm start
```

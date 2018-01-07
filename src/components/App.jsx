import React from 'react';
import Sidebar from 'Components/sidebar/Sidebar';
import { withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import generalStyles from 'Styles/general';
import * as RouteConstant from 'Constants/RouteConstants';
import NewReleases from 'Containers/NewReleasesContainer';
import FeaturedPlaylists from 'Components/FeaturedPlaylists';
import Album from 'Containers/AlbumContainer';
import Artist from 'Containers/ArtistContainer';
import Logout from 'Components/Logout';

class App extends React.Component {
  render () {
    return <div>
      <Sidebar/>
      <div className={generalStyles.content}>
        <Switch>
          <Route path={RouteConstant.HOME} exact component={NewReleases}/>
          <Route path={RouteConstant.NEW_RELEASES} component={NewReleases}/>
          <Route path={RouteConstant.FEATURED_PLAYLISTS} component={FeaturedPlaylists}/>
          <Route path={RouteConstant.ALBUM} component={Album}/>
          <Route path={RouteConstant.LOGOUT} component={Logout}/>
          <Route path={RouteConstant.ARTIST} component={Artist}/>
        </Switch>
      </div>
    </div>;
  }
}

export default withRouter(App);

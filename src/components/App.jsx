import React from 'react';
import Sidebar from 'Components/sidebar/Sidebar';
import { withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import * as RouteConstant from 'Constants/RouteConstants';
import NewReleases from 'Components/NewReleases';
import Logout from 'Components/Logout';

class App extends React.Component {
  render () {
    return <div>
      <Sidebar/>
      <Switch>
        <Route path={RouteConstant.HOME} exact component={NewReleases}/>
        <Route path={RouteConstant.NEW_RELEASES} component={NewReleases}/>
        <Route path={RouteConstant.LOGOUT} component={Logout}/>
      </Switch>
    </div>;
  }
}

export default withRouter(App);

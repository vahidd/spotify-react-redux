import React from 'react';
import Sidebar from 'Components/sidebar/Sidebar';
import { withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import NewReleases from 'Components/NewReleases';
import Logout from 'Components/Logout';

class App extends React.Component {
  render () {
    return <div>
      <Sidebar/>
      <Switch>
        <Route path="/" exact component={NewReleases}/>
        <Route path="/new-releases" component={NewReleases}/>
        <Route path="/logout" component={Logout}/>
      </Switch>
    </div>;
  }
}

export default withRouter(App);

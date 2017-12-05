import React from 'react';
import Sidebar from 'Components/sidebar/Sidebar';
import { withRouter } from 'react-router-dom';

class App extends React.Component {

  render () {
    return <Sidebar/>;
  }
}

export default withRouter(App);

import React from 'react';
import { Redirect } from 'react-router-dom';

import AuthService from 'Services/AuthService';

class Logout extends React.Component {

  componentDidMount () {
    AuthService.logout();
  }

  render () {
    return <Redirect to="/"/>;
  }
}

export default Logout;
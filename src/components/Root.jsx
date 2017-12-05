import React from 'react';
import 'sanitize.css';
import { withRouter } from 'react-router-dom';

import 'Styles/general.scss';
import AuthService from 'Services/AuthService';
import Landing from 'Components/Landing';
import App from 'Components/App';

class Root extends React.Component {
  render () {
    return AuthService.isLoggedIn()
      ? <App/>
      : <Landing/>;
  }
}

export default withRouter(Root);
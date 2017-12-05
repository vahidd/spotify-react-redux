import React from 'react';
import AuthService from 'Services/AuthService';
import LoginCallback from 'Components/LoginCallback';
import { Switch, Route } from 'react-router-dom';

export default class LoginButton extends React.Component {

  renderLanding () {
    return <a href={AuthService.getLoginUrl()}>Login</a>;
  }

  render () {
    return <Switch>
      <Route path='/auth-callback' component={LoginCallback}/>
      <Route path='/' component={this.renderLanding}/>
    </Switch>;
  }
}

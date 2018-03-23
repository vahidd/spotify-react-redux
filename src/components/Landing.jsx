import React from 'react';
import AuthService from 'Services/AuthService';
import LoginCallback from 'Components/LoginCallback';
import { Switch, Route } from 'react-router-dom';
import { Button } from 'antd';

import styles from 'Styles/landing.scss';

export default class LoginButton extends React.Component {
  renderLanding () {
    return (
      <div className={styles.container}>
        <div className={styles.inner}>
          <h1 className={styles.title}>
            Login with spotify
          </h1>
          <Button
            type="primary"
            icon="spotify"
            className={styles.login}
            href={AuthService.getLoginUrl()}
            size="large"
          >
            Log-in
          </Button>
        </div>
      </div>
    );
  }

  render () {
    return (
      <Switch>
        <Route
          path="/auth-callback"
          component={LoginCallback}
        />
        <Route
          path="/"
          component={this.renderLanding}
        />
      </Switch>
    );
  }
}

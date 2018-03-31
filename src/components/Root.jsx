import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import 'sanitize.css';
import 'Styles/general.scss';
import AuthService from 'Services/AuthService';
import Landing from 'Components/Landing';
import App from 'Components/App';

class Root extends React.Component {
  shouldComponentUpdate (nextProps) {
    return nextProps.match.url === this.props.match.url;
  }

  render () {
    return AuthService.isLoggedIn()
      ? <App />
      : <Landing />;
  }
}

Root.propTypes = {
  match: PropTypes.object.isRequired
};

export default withRouter(Root);

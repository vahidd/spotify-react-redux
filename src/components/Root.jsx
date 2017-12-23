import React from 'react';
import { withRouter } from 'react-router-dom';
import 'sanitize.css';
import 'Root/node_modules/antd/lib/style/index.css';
import 'Root/node_modules/antd/lib/dropdown/style/index.css';
import 'Root/node_modules/antd/lib/grid/style/index.css';
import 'Root/node_modules/antd/lib/modal/style/index.css';
import 'Root/node_modules/antd/lib/button/style/index.css';
import 'Root/node_modules/antd/lib/form/style/index.css';
import 'Root/node_modules/antd/lib/input/style/index.css';
import 'Root/node_modules/antd/lib/checkbox/style/index.css';

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
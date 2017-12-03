import React  from 'react';
import 'sanitize.css';
import 'Styles/general.scss';

import Sidebar from 'Components/sidebar/Sidebar';

export default class Root extends React.Component {
  render () {
    return <div>
      <Sidebar />
    </div>;
  }
}
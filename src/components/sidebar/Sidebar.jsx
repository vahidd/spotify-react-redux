import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'Styles/sidebar.scss';
import Discover from 'Components/sidebar/Discover';
import YourCollection from 'Components/sidebar/YourCollection';

class Sidebar extends React.Component {
  render () {
    return <div styleName="sidebar">
      <Discover/>
      <YourCollection />
    </div>;
  }
}

export default CSSModules(Sidebar, styles);
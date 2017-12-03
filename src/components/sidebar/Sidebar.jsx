import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'Styles/sidebar.scss';

class Sidebar extends React.Component {
  render () {
    return <div styleName="sidebar">
      :)
    </div>;
  }
}

export default CSSModules(Sidebar, styles);
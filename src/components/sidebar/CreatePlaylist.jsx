import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from 'Styles/sidebar.scss';

class CreatePlaylist extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    let
      {input} = this.refs,
      onBlur = () => {
        this.props.cancel();
      };
    input.addEventListener('keyup', (event) => {
      switch (event.keyCode) {
        case 13:
          this.props.done(input.value);
          break;
        case 27:
          this.props.cancel();
          break;
      }
    });
    input.addEventListener('blur', onBlur);
  }

  render () {
    return <input
      type="text"
      ref="input"
      autoFocus
      placeholder="Type and press enter..."
      styleName="create-playlist-input"
      style={{display: this.props.isOpen ? 'block' : 'none'}}/>;
  }
}

CreatePlaylist.propTypes = {
  isOpen       : PropTypes.bool.isRequired,
  done         : PropTypes.func.isRequired,
  cancel       : PropTypes.func.isRequired,
  containerNode: (props, propName, componentName) => {
    if (!props[propName] instanceof Element) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  }
};

export default CSSModules(CreatePlaylist, styles);
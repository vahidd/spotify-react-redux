import React from 'react';
import PropTypes from 'prop-types';

export default class Image extends React.Component {
  constructor () {
    super();
    this.state = {
      loaded: false
    };
    this.setRef = this.setRef.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad () {
    this.setState({
      loaded: true
    });
    window.requestAnimationFrame(() => {
      this.image.style.transition = 'opacity 1s';
      this.image.style.opacity = 1;
    });
  }

  setRef (ref) {
    this.image = ref;
  }

  render () {
    const {containerClassName, children, ...props} = this.props;
    return (
      <div className={containerClassName}>
        <div style={{display: this.state.loaded ? 'none' : 'block'}}>
          {children}
        </div>
        <img
          {...props}
          onLoad={this.handleLoad}
          style={{opacity: 0, maxWidth: '100%', maxHeight: '100%', height: 'auto', width: 'auto'}}
          ref={this.setRef}
        />
      </div>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.any,
  containerClassName: PropTypes.string
};

Image.defaultProps = {
  containerClassName: '',
  children: null
};

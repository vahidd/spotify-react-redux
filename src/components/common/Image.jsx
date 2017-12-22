import React from 'react';
import PropTypes from 'prop-types';

export default class Image extends React.Component {

  constructor () {
    super();
    this.state = {
      loaded: false
    };
    this.onLoad = this.onLoad.bind(this);
  }

  onLoad () {
    this.setState({
      loaded: true
    });
    window.requestAnimationFrame(() => {
      this.refs.img.style.transition = 'opacity 1s';
      this.refs.img.style.opacity = 1;
    });
  }

  render () {
    const {containerClassName, children, ...props} = this.props;
    return <div className={containerClassName}>
      <div style={{display: this.state.loaded ? 'none' : 'block'}}>{children}</div>
      <img {...props} onLoad={this.onLoad} style={{opacity: 0}} ref="img"/>
    </div>;
  }
}

Image.propTypes = {
  src               : PropTypes.string.isRequired,
  containerClassName: PropTypes.string
};
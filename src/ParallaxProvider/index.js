import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ParallaxContext from './context';
import defaultClassPrefix from '../defaultClassPrefix';

class ParallaxProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollAnimationScheduled: false,
      resizeAnimationScheduled: false,
      scrollPos: {
        x: 0,
        y: 0,
      },
      windowInfo: {
        width: 0,
        height: 0,
      },
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.requestScrollAnimation);
    window.addEventListener('resize', this.requestResizeAnimation);
    window.addEventListener('orientationchange', this.updateWindowInfoWithTimeout);
    this.updateScrollPos();
    this.updateWindowInfo();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.requestAnimation);
    window.removeEventListener('resize', this.requestAnimation);
    window.removeEventListener('orientationchange', this.updateWindowInfoWithTimeout);
  }

  updateWindowInfoWithTimeout = () => {
    setTimeout(() => {
      this.updateSizes();
    }, 500);
  }

  updateScrollPos = () => {
    const { scrollPos } = this.state;

    this.setState({
      scrollAnimationScheduled: false,
      scrollPos: {
        ...scrollPos,
        x: window.pageXOffset,
        y: window.pageYOffset,
      },
    });
  };

  updateWindowInfo = () => {
    this.setState({
      resizeAnimationScheduled: false,
      windowInfo: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  }

  requestScrollAnimation = () => {
    const { scrollAnimationScheduled } = this.state;
    if (!scrollAnimationScheduled) {
      requestAnimationFrame(this.updateScrollPos);
      this.setState({ scrollAnimationScheduled: true });
    }
  }

  requestResizeAnimation = () => {
    const { resizeAnimationScheduled } = this.state;
    if (!resizeAnimationScheduled) {
      requestAnimationFrame(this.updateWindowInfo);
      this.setState({ resizeAnimationScheduled: true });
    }
  }

  render() {
    const {
      children,
      classPrefix,
    } = this.props;

    const {
      scrollPos,
      windowInfo,
    } = this.state;

    const parallaxContext = {
      windowInfo,
      scrollPos,
      classPrefix: classPrefix || defaultClassPrefix,
    };

    return (
      <ParallaxContext.Provider value={parallaxContext}>
        {children}
      </ParallaxContext.Provider>
    );
  }
}

ParallaxProvider.defaultProps = {
  classPrefix: '',
};

ParallaxProvider.propTypes = {
  children: PropTypes.node.isRequired,
  classPrefix: PropTypes.string,
};

export default ParallaxProvider;

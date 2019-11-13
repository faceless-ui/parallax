import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withParallaxContext from '../withParallaxContext';

const getOffsetTop = (element) => {
  let el = element;
  let distance = 0;
  if (el.offsetParent) {
    do {
      distance += el.offsetTop;
      el = el.offsetParent;
    } while (el);
  }
  return distance < 0 ? 0 : distance;
};

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.domRef = React.createRef();
  }

  createStyles = () => {
    const {
      speed,
      windowInfo: {
        height: windowHeight,
      },
      scrollPos,
    } = this.props;

    const style = {
      willChange: 'transform',
      transform: '',
    };

    if (this.domRef.current) {
      const offsetTop = getOffsetTop(this.domRef.current);
      const min = offsetTop;
      const max = offsetTop + windowHeight;
      const pos = (((scrollPos.y - min) / (max - min)) * 100).toFixed(3);
      const capped = Math.min(Math.max(pos, -300), 300);
      const transform = capped * speed;
      style.transform = `translate3d(0, ${transform}%, 0)`;
    }

    return style;
  }

  render() {
    const {
      id,
      className,
      children,
      htmlElement: HtmlElement,
      classPrefix,
    } = this.props;

    const baseClass = `${classPrefix}__parallax`;
    const styles = this.createStyles();

    const classes = [
      baseClass,
      className,
    ].filter(Boolean).join(' ');

    return (
      <HtmlElement
        id={id}
        ref={this.domRef}
        className={classes}
        style={styles}
      >
        {children}
      </HtmlElement>
    );
  }
}

Parallax.defaultProps = {
  id: undefined,
  className: undefined,
  speed: 0.8,
  htmlElement: 'div',
};

Parallax.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  speed: PropTypes.number,
  htmlElement: PropTypes.oneOf([
    'div',
    'nav',
    'span',
    'section',
    'article',
  ]),
  windowInfo: PropTypes.shape({
    height: PropTypes.number,
  }).isRequired,
  scrollPos: PropTypes.shape({
    y: PropTypes.number,
  }).isRequired,
  children: PropTypes.node.isRequired,
  classPrefix: PropTypes.string.isRequired,
};

export default withParallaxContext(Parallax);

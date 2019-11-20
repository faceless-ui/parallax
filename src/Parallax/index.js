import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withParallaxContext from '../withParallaxContext';

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.domRef = React.createRef();
    this.state = {
      nodeRect: {
        width: 0,
        height: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      xTransform: 0,
      yTransform: 0,
      cssTransform: '',
    };
  }

  componentDidMount() {
    this.queryNodeRect();
  }

  componentDidUpdate(prevProps) {
    const {
      windowInfo: { count: windowCount },
      scrollInfo: { count: scrollCount },
    } = this.props;

    const {
      windowInfo: { count: prevWindowCount },
      scrollInfo: { count: prevScrollCount },
    } = prevProps;

    if (windowCount !== prevWindowCount) {
      this.queryNodeRect();
    }

    if (scrollCount !== prevScrollCount) {
      if (scrollCount > 1) {
        this.trackNodeRect();
      } else {
        this.queryNodeRect();
      }
    }
  }

  // queried (true) positions
  queryNodeRect = () => {
    const { current: node } = this.domRef;
    const {
      xTransform: prevXTransform,
      yTransform: prevYTransform,
    } = this.state;

    if (node) {
      const DOMRect = node.getBoundingClientRect(); // clientRect because its relative to the vieport=

      const nodeRect = {
        width: DOMRect.width,
        height: DOMRect.height,
        top: DOMRect.top - prevYTransform, // subtrack prevTransform values to get the original, non-transformed node
        right: DOMRect.right - prevXTransform,
        bottom: DOMRect.bottom - prevXTransform,
        left: DOMRect.left - prevXTransform,
      }; // create a new, plain object from the DOMRect object

      this.setState({
        nodeRect,
      }, () => this.getCSSTransform());
    }
  }

  // synthetic (calculated) positions
  trackNodeRect = () => {
    const { nodeRect } = this.state;

    const {
      scrollInfo: {
        xDifference,
        yDifference,
      },
    } = this.props;

    const newNodeRect = {
      ...nodeRect, // maintain queried width and height
      top: nodeRect.top - yDifference,
      right: nodeRect.right - xDifference,
      bottom: nodeRect.bottom - yDifference,
      left: nodeRect.left - xDifference,
    };

    this.setState({
      nodeRect: newNodeRect,
    }, () => this.getCSSTransform());
  }

  getCSSTransform = () => {
    const {
      nodeRect: {
        width: nodeWidth,
        height: nodeHeight,
        top: nodeTop,
        left: nodeLeft,
      },
    } = this.state;

    const {
      xDistance,
      yDistance,
      windowInfo: {
        width: windowWidth,
        height: windowHeight,
      },
    } = this.props;

    const totalYTravel = windowHeight + nodeHeight;
    const yDistanceToBoundary = nodeTop + nodeHeight;
    const yRatioInViewport = 1 - (yDistanceToBoundary / totalYTravel);

    const totalXTravel = windowWidth + nodeWidth;
    const xDistanceToBoundary = nodeLeft + nodeWidth;
    const xRatioInViewport = 1 - (xDistanceToBoundary / totalXTravel);

    const xTransform = Math.round(xDistance * xRatioInViewport);
    const yTransform = Math.round(yDistance * yRatioInViewport);

    const cssTransform = `translate3d(${xDistance && xTransform}px, ${yDistance && yTransform}px, 0)`;

    this.setState({
      xTransform,
      yTransform,
      cssTransform,
    });
  }

  render() {
    const {
      classPrefix,
      id,
      className,
      style,
      htmlElement: HtmlElement,
      htmlAttributes,
      scrollInfo: {
        count: scrollCount,
      },
      children,
    } = this.props;

    const { cssTransform } = this.state;

    const baseClass = `${classPrefix}__parallax`;

    const classes = [
      baseClass,
      scrollCount && `${baseClass}--has-scrolled`,
      className,
      htmlAttributes.className,
    ].filter(Boolean).join(' ');

    const strippedHtmlAttributes = { ...htmlAttributes };
    delete strippedHtmlAttributes.id;
    delete strippedHtmlAttributes.className;
    delete strippedHtmlAttributes.style;

    return (
      <HtmlElement
        id={id || htmlAttributes.id}
        ref={this.domRef}
        className={classes}
        style={{
          ...htmlAttributes.style,
          ...style,
          transform: cssTransform,
        }}
        {...strippedHtmlAttributes}
      >
        {children}
      </HtmlElement>
    );
  }
}

Parallax.defaultProps = {
  classPrefix: '',
  id: '',
  className: '',
  xDistance: 0,
  yDistance: 0,
  style: {},
  htmlElement: 'div',
  htmlAttributes: {},
};

Parallax.propTypes = {
  classPrefix: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  xDistance: PropTypes.number,
  yDistance: PropTypes.number,
  scrollInfo: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    xDifference: PropTypes.number,
    yDifference: PropTypes.number,
    count: PropTypes.number,
  }).isRequired,
  windowInfo: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    count: PropTypes.number,
  }).isRequired,
  style: PropTypes.shape({}),
  htmlElement: PropTypes.oneOf([
    'article',
    'aside',
    'div',
    'footer',
    'header',
    'main',
    'nav',
    'section',
    'span',
    'ul',
    'li',
  ]),
  htmlAttributes: PropTypes.shape({
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.shape({}),
  }),
  children: PropTypes.node.isRequired,
};

export default withParallaxContext(Parallax);

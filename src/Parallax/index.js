import React, { forwardRef, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { withNodePosition } from '@trbl/react-node-position';

const Parallax = forwardRef((props, ref) => {
  const [cssTransform, setCSSTransform] = useState('');

  const {
    classPrefix,
    id,
    className,
    xDistance,
    yDistance,
    nodePosition: {
      xPercentageInFrame,
      yPercentageInFrame,
    },
    style,
    htmlElement: HtmlElement,
    htmlAttributes,
    children,
  } = props;

  useLayoutEffect(() => {
    const preTransformAdjustment = 1;
    const xTransform = Math.round((xDistance * (xPercentageInFrame / 100)) * preTransformAdjustment);
    const yTransform = Math.round((yDistance * (yPercentageInFrame / 100)) * preTransformAdjustment);

    setCSSTransform(`translate3d(${xDistance && xTransform}px, ${yDistance && yTransform}px, 0)`);
  }, [xPercentageInFrame, yPercentageInFrame]);

  const baseClass = `${classPrefix}__parallax`;

  const classes = [
    baseClass,
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
      ref={ref}
      className={classes}
      style={{
        ...htmlAttributes.style,
        ...style,
      }}
      {...strippedHtmlAttributes}
    >
      <div
        style={{
          transform: cssTransform,
          width: '100%',
          height: '100%',
          // border: 'solid 1px black',
          backgroundColor: 'rgba(0, 0, 0, .15)',
        }}
      >
        {children}
      </div>
    </HtmlElement>
  );
});

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
  nodePosition: PropTypes.shape({
    xPercentageInFrame: PropTypes.number,
    yPercentageInFrame: PropTypes.number,
  }).isRequired,
  xDistance: PropTypes.number,
  yDistance: PropTypes.number,
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

export default withNodePosition(Parallax);

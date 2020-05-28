import React, { forwardRef, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { withNodePosition } from '@faceless-ui/node-position';
import HTMLElement from '@faceless-ui/html-element';

const Parallax = forwardRef((props, ref) => {
  const [cssTransform, setCSSTransform] = useState('');

  const {
    id,
    className,
    style,
    htmlElement,
    htmlAttributes,
    classPrefix,
    xDistance,
    yDistance,
    nodePosition: {
      xPercentageInFrame,
      yPercentageInFrame,
    },
    children,
  } = props;

  useLayoutEffect(() => {
    const preTransformAdjustment = 1;
    const xTransform = Math.round((xDistance * (xPercentageInFrame / 100)) * preTransformAdjustment);
    const yTransform = Math.round((yDistance * (yPercentageInFrame / 100)) * preTransformAdjustment);

    setCSSTransform(`translate3d(${xDistance && xTransform}px, ${yDistance && yTransform}px, 0)`);
  }, [xDistance, xPercentageInFrame, yDistance, yPercentageInFrame]);

  const baseClass = `${classPrefix}__parallax`;

  const mergedClasses = [
    baseClass,
    className,
  ].filter(Boolean).join(' ');

  return (
    <HTMLElement
      {...{
        id,
        className: mergedClasses,
        style,
        htmlElement,
        htmlAttributes,
        ref,
      }}
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
        {children && children}
      </div>
    </HTMLElement>
  );
});

Parallax.defaultProps = {
  id: undefined,
  className: undefined,
  style: {},
  htmlElement: 'div',
  htmlAttributes: {},
  classPrefix: '',
  xDistance: 0,
  yDistance: 0,
  children: undefined,
};

Parallax.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  htmlElement: PropTypes.string,
  htmlAttributes: PropTypes.shape({}),
  classPrefix: PropTypes.string,
  xDistance: PropTypes.number,
  yDistance: PropTypes.number,
  nodePosition: PropTypes.shape({
    xPercentageInFrame: PropTypes.number,
    yPercentageInFrame: PropTypes.number,
  }).isRequired,
  children: PropTypes.node,
};

export default withNodePosition(Parallax);

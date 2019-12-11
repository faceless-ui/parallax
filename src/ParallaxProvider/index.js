import React from 'react';
import PropTypes from 'prop-types';
import { NodePositionProvider } from '@trbl/react-node-position';
import defaultClassPrefix from '../defaultClassPrefix';

const ParallaxProvider = (props) => {
  const {
    children,
    classPrefix,
  } = props;

  return (
    <NodePositionProvider classPrefix={classPrefix || defaultClassPrefix}>
      {children}
    </NodePositionProvider>
  );
};

ParallaxProvider.defaultProps = {
  classPrefix: '',
};

ParallaxProvider.propTypes = {
  children: PropTypes.node.isRequired,
  classPrefix: PropTypes.string,
};

export default ParallaxProvider;

import React from 'react';
import PropTypes from 'prop-types';
import { WindowInfoProvider, WindowInfoContext } from '@trbl/react-window-info';
import { ScrollPositionProvider, ScrollPositionContext } from '@trbl/react-scroll-position';
import ParallaxContext from './context';
import defaultClassPrefix from '../defaultClassPrefix';

const ParallaxProvider = (props) => {
  const {
    children,
    classPrefix,
  } = props;

  return (
    <WindowInfoProvider>
      <WindowInfoContext.Consumer>
        {(windowInfoContext) => {
          const { windowInfo } = windowInfoContext;
          return (
            <ScrollPositionProvider>
              <ScrollPositionContext.Consumer>
                {(scrollPositionContext) => {
                  const { scrollPos } = scrollPositionContext;
                  const parallaxContext = {
                    scrollPos,
                    windowInfo,
                    classPrefix: classPrefix || defaultClassPrefix,
                  };
                  return (
                    <ParallaxContext.Provider value={parallaxContext}>
                      {children}
                    </ParallaxContext.Provider>
                  );
                }}
              </ScrollPositionContext.Consumer>
            </ScrollPositionProvider>
          );
        }}
      </WindowInfoContext.Consumer>
    </WindowInfoProvider>
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

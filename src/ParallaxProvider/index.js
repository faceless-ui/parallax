import React from 'react';
import PropTypes from 'prop-types';
import { WindowInfoProvider, WindowInfoContext } from '@trbl/react-window-info';
import { ScrollInfoProvider, ScrollInfoContext } from '@trbl/react-scroll-info';
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
            <ScrollInfoProvider>
              <ScrollInfoContext.Consumer>
                {(scrollInfoContext) => {
                  const { scrollInfo } = scrollInfoContext;
                  const parallaxContext = {
                    scrollInfo,
                    windowInfo,
                    classPrefix: classPrefix || defaultClassPrefix,
                  };
                  return (
                    <ParallaxContext.Provider value={parallaxContext}>
                      {children}
                    </ParallaxContext.Provider>
                  );
                }}
              </ScrollInfoContext.Consumer>
            </ScrollInfoProvider>
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

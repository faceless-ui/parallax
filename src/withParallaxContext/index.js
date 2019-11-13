import React from 'react';
import ParallaxContext from '../ParallaxProvider/context';

const withParallaxContext = (PassedComponent) => {
  const ParallaxWrap = (props) => {
    return (
      <ParallaxContext.Consumer>
        {(context) => {
          return (
            <PassedComponent
              {...{
                ...props,
                ...context,
              }}
            />
          );
        }}
      </ParallaxContext.Consumer>
    );
  };
  return ParallaxWrap;
};

export default withParallaxContext;

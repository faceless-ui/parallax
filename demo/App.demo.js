import React, { Fragment } from 'react';
import ParallaxDemo from './Parallax.demo';

const AppDemo = () => {
  return (
    <Fragment>
      <div id="parallax">
        <ParallaxDemo />
      </div>
      <div
        id="spacer"
        style={{ height: '10000px' }}
      />
    </Fragment>
  );
};

export default AppDemo;

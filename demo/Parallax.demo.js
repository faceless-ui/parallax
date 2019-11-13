import React, { Fragment } from 'react';
import { Parallax } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const ParallaxDemo = () => {
  return (
    <Fragment>
      <pre style={{ marginTop: '0px' }}>
        <code>
          classPrefix: demo
          <br />
          hCount: 14
          <br />
          hGap: 10px
          <br />
          speed: 10px
        </code>
      </pre>
      <Parallax speed={0.9}>
        <div
          style={{
            height: '900px',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, .15)',
            marginTop: '600px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <pre>
            <code>
                speed: 0.9
            </code>
          </pre>
        </div>
      </Parallax>
    </Fragment>
  );
};

export default ParallaxDemo;

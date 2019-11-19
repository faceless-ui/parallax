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

      <div style={{ height: '1000px' }} />

      <div style={{ display: 'flex' }}>
        <div
          style={{
            height: '100px',
            width: '100px',
            backgroundColor: 'rgba(0, 0, 0, .05)',
            marginRight: '10px',
            flexShrink: 0,
          }}
        />
        <Parallax
          yDistance={100}
          style={{
            flexGrow: 1,
            flexShrink: 0,
            width: '50%',
            marginRight: '10px',
          }}
        >
          <div
            style={{
              height: '100px',
              backgroundColor: 'rgba(0, 0, 0, .15)',
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <pre>
              <code>
                yDistance: 100
              </code>
            </pre>
          </div>
        </Parallax>
        <div
          style={{
            height: '200px',
            width: '50vw',
            backgroundColor: 'rgba(0, 0, 0, .05)',
            marginRight: '10px',
            flexShrink: 0,
          }}
        />
        <Parallax
          xDistance={100}
          style={{
            flexGrow: 1,
            marginRight: '10px',
          }}
        >
          <div
            style={{
              height: '400px',
              backgroundColor: 'rgba(0, 0, 0, .15)',
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <pre>
              <code>
                xDistance: 100
              </code>
            </pre>
          </div>
        </Parallax>
        <div
          style={{
            height: '200px',
            width: '100vw',
            backgroundColor: 'rgba(0, 0, 0, .05)',
            marginRight: '10px',
            flexShrink: 0,
          }}
        />
      </div>
    </Fragment>
  );
};

export default ParallaxDemo;

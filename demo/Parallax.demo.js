import React, { Fragment } from 'react';
import { Parallax, ParallaxProvider } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const ParallaxDemo = () => {
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{ __html: `
          .custom__parallax--has-scrolled {
            transition: transform 600ms cubic-bezier(0, 0, 0.2, 1) 0s;
          }
        ` }}
      />
      <pre style={{ marginTop: '0px' }}>
        <code>
          hCount: 14
          <br />
          hGap: 10px
          <br />
          speed: 10px
          <br />
          classPrefix: custom
        </code>
      </pre>
      <ParallaxProvider classPrefix="custom">
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
      </ParallaxProvider>
    </Fragment>
  );
};

export default ParallaxDemo;

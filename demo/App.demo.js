import React, { Fragment } from 'react';
import { ParallaxProvider } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import ParallaxDemo from './Parallax.demo';

const AppDemo = () => (
  <Fragment>
    <style
      dangerouslySetInnerHTML={{
        __html: `
          .demo__parallax {
            opacity: 0;
          }

          .demo__parallax--has-scrolled {
            transition: transform 600ms cubic-bezier(0, 0, 0.2, 1) 0s;
          }

          .demo__parallax--is-in-position {
            opacity: 1;
          }
        `,
      }}
    />
    <ParallaxProvider classPrefix="demo">
      <ParallaxDemo />
    </ParallaxProvider>
  </Fragment>
);

export default AppDemo;

import React, { Fragment } from 'react';
import { Parallax } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const ParallaxDemo = () => {
  return (
    <Fragment>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            flexGrow: 1,
            flexShrink: 0,
            marginLeft: '200px',
            marginTop: '50vh',
          }}
        >
          <Parallax
            id="demo-id"
            yDistance={-100}
            htmlElement="section"
            className="demo-class"
            style={{
              border: 'dashed rgba(0, 0, 0, .15) 2px',
              width: '600px',
            }}
            htmlAttributes={{
              id: 'demo-html-attribute-id', // will be overriden by 'id' prop
              className: 'demo-html-attribute-class', // will be merged with 'className' prop
              'aria-label': 'demo aria label',
              style: { // will be merged with 'style' prop
                border: 'dashed red 2px', // will be overriden by matched css property of 'style' prop
              },
            }}
          >
            <div
              style={{
                height: '100px',
                backgroundColor: 'rgba(0, 0, 0, .15)',
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0,
                transform: 'none', // will be ignored because this style is reserved for the parallax effect
              }}
            >
              <pre>
                <code>
                  yDistance: -100
                </code>
              </pre>
            </div>
          </Parallax>

          <div
            style={{
              height: '500px',
              width: '1px',
              flexShrink: 0,
            }}
          />

          <Parallax
            yDistance={-100}
            style={{
              border: 'dashed rgba(0, 0, 0, .15) 2px',
              width: '100px',
            }}
          >
            <div
              style={{
                height: '300px',
                backgroundColor: 'rgba(0, 0, 0, .15)',
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              <pre>
                <code>
                  yDistance: -100
                </code>
              </pre>
            </div>
          </Parallax>
        </div>

        <Parallax
          xDistance={100}
          style={{
            flexGrow: 1,
            border: 'dashed rgba(0, 0, 0, .15) 2px',
            marginLeft: '500px',
          }}
        >
          <div
            style={{
              height: '650px',
              width: '150px',
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

        <Parallax
          xDistance={-400}
          style={{
            flexGrow: 1,
            border: 'dashed rgba(0, 0, 0, .15) 2px',
            marginLeft: '50vw',
          }}
        >
          <div
            style={{
              height: '300px',
              width: '700px',
              backgroundColor: 'rgba(0, 0, 0, .15)',
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <pre>
              <code>
                xDistance: -400
              </code>
            </pre>
          </div>
        </Parallax>

        <div
          style={{
            height: '1px',
            width: '200vw',
            flexShrink: 0,
          }}
        />
      </div>

      <Parallax
        xDistance={-250}
        yDistance={125}
        style={{
          border: 'dashed rgba(0, 0, 0, .15) 2px',
          marginTop: '500px',
          marginLeft: '800px',
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
              yDistance: -250
              yDistance: 125
            </code>
          </pre>
        </div>
      </Parallax>

      <div style={{ height: '10000px' }} />

    </Fragment>
  );
};

export default ParallaxDemo;

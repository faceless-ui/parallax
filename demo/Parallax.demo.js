import React, { Fragment } from 'react';
import { Parallax } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const ParallaxDemo = () => {
  return (
    <Fragment>
      <div style={{ display: 'flex', alignItems: 'center' }}>

        <div style={{ width: '200px', flexShrink: '0' }} />

        <div
          style={{
            flexGrow: 1,
            flexShrink: 0,
            marginTop: '125vh',
          }}
        >
          <div
            style={{
              width: '700px',
              height: '200px',
              outline: 'dashed rgba(0, 0, 0, .15) 2px',
            }}
          >
            <Parallax
              id="demo-id"
              yDistance={-100}
              htmlElement="section"
              className="demo-class"
              style={{
                width: '100%',
                height: '100%',
                // backgroundColor: 'rgba(0, 0, 0, .15)',
                transform: 'none', // will be ignored because this style is reserved for the parallax effect
              }}
              htmlAttributes={{
                id: 'demo-html-attribute-id', // will be overriden by 'id' prop
                className: 'demo-html-attribute-class', // will be merged with 'className' prop
                'aria-label': 'demo aria label',
                style: { // will be merged with 'style' prop
                  // backgroundColor: 'red', // will be overriden by matched css property of 'style' prop above
                  opacity: '1',
                },
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
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
        </div>
      </div>

      {/* <div style={{ height: '500px', flexShrink: '0' }} />

          <div
            style={{
              outline: 'dashed rgba(0, 0, 0, .15) 2px',
              width: '100px',
              height: '100px',
            }}
          >
            <Parallax
              yDistance={-600}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, .15)',
              }}
            >
              <pre>
                <code>
                  yDistance: -600
                </code>
              </pre>
            </Parallax>
          </div>
        </div>

        <div style={{ width: '50vw', flexShrink: '0' }} />

        <div
          style={{
            flexShrink: '0',
            outline: 'dashed rgba(0, 0, 0, .15) 2px',
            height: '400px',
            width: '150px',
          }}
        >

          <Parallax
            xDistance={125}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, .15)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              <pre>
                <code>
                  xDistance: 125
                </code>
              </pre>
            </div>
          </Parallax>
        </div>

        <div style={{ width: '75vw', flexShrink: '0' }} />

        <div
          style={{
            flexShrink: '0',
            outline: 'dashed rgba(0, 0, 0, .15) 2px',
            height: '300px',
            width: '700px',
          }}
        >
          <Parallax
            xDistance={-400}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, .15)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              <pre>
                <code>
                  x Distance: -400
                </code>
              </pre>
            </div>
          </Parallax>
        </div>

        <div style={{ width: '200vw', height: '1px', flexShrink: '0' }} />

      </div>

      <div
        style={{
          flexShrink: '0',
          outline: 'dashed rgba(0, 0, 0, .15) 2px',
          marginTop: '500px',
          marginLeft: '800px',
          height: '100px',
          width: '400px',
        }}
      >
        <Parallax
          xDistance={-250}
          yDistance={125}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, .15)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
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
      </div> */}

      <div style={{ height: '200vh' }} />

    </Fragment>
  );
};

export default ParallaxDemo;

[![NPM](https://img.shields.io/npm/v/@trbl/react-parallax)](https://www.npmjs.com/@trbl/react-parallax)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-parallax?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Parallax

## Highlights

## Quick Start

### Installation

```bash
$ npm i @trbl/react-parallax
$ # or
$ yarn add @trbl/react-parallax
```

### Composition

```jsx
  import React from 'react';
  import { ParallaxProvider, Parallax } from '@trbl/react-parallax';

  const App = () => (
    <ParallaxProvider>
      <Parallax speed={0.3}>
        ...
      </Parallax>
      <Parallax speed={0.9}>
        ...
      </Parallax>
    </ParallaxProvider>
  )

  export default App;
```

For working examples, see the [demo app](./demo/App.demo.js).

## Demo

```bash
$ git clone git@github.com:trouble/react-parallax.git
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## API

  - [Parallax](./src/Parallax/README.md)
  - [ParallaxProvider](./src/ParallaxProvider/README.md)

## Contribution

[Help us,](https://github.com/trouble/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/trouble/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/trouble/react-parallax/blob/master/LICENSE) Copyright (c) TRBL, LLC

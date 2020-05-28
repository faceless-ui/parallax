[![NPM](https://img.shields.io/npm/v/@faceless-ui/parallax)](https://www.npmjs.com/@faceless-ui/parallax)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@faceless-ui/parallax?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Parallax

## Highlights

## Quick Start

### Installation

```bash
$ npm i @faceless-ui/parallax
$ # or
$ yarn add @faceless-ui/parallax
```

### Composition

```jsx
  import React from 'react';
  import { ParallaxProvider, Parallax } from '@faceless-ui/parallax';

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
$ git clone git@github.com:faceless-ui/parallax.git
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## API

  - [Parallax](./src/Parallax/README.md)
  - [ParallaxProvider](./src/ParallaxProvider/README.md)

## Contribution

[Help us,](https://github.com/faceless-ui/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/faceless-ui/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/faceless-ui/parallax/blob/master/LICENSE) Copyright (c) TRBL, LLC

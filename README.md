[![NPM](https://img.shields.io/npm/v/@trbl/react-parallax)](https://www.npmjs.com/@trbl/react-parallax)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-parallax?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Parallax

A smoooth as butter parallax for React projects.

## Quick Start

### Installation

```bash
$ yarn add @trbl/react-parallax
```

### Compositon

```jsx
  <ParallaxProvider>
    <Parallax speed={0.3}>
      ...
    </Parallax>
    <Parallax speed={0.9}>
      ...
    </Parallax>
  </ParallaxProvider>
```

## Demo

To demo locally, clone the repo and

```bash
$ yarn install
$ npm run dev
$ open http://localhost:3000
```

## Documentation

All available props can be found via the references below:

  - [Parallax](/src/Parallax/README.md)
  - [ParallaxProvider](/src/ParallaxProvider/README.md)

## License

[MIT](https://github.com/trouble/react-parallax/blob/master/LICENSE) Copyright (c) TRBL, LLC

This is simple lib to receive new opacify color.

## Installation

```bash
yarn add opacify
# or
npm install opacify
```

## Usage

```js
import opacify from 'opacify';

opacify.rgbaToHex(230, 30, 77, 0.5) // #e61e4d80 

opacify.hexToRgba("#e61e4d", 0.5) // rgba(230, 30 , 77, 0.5)

opacify.hexWithAlpha("#e61e4d", 0.5) //  #e61e4d80
```

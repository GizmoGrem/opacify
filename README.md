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

## Invalid cases

```js
// invalid opacity value
opacify.rgbaToHex(230, 30, 77, 11) // => false 
opacify.hexWithAlpha("#e61e4d", 2) // => #e61e4d (return hex without alpha)

// invalid arguments count
opacify.rgbaToHex(230, 30, 77, 0.3, 11) // => false 
opacify.hexToRgba("#e61e4d", 0.5, 11) // => false
```

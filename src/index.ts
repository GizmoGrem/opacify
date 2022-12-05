import { RgbColor, ColorCode } from './types';

const isValidHEX = (hex: string) => /^#[0-9A-F]{6}$/i.test(hex);

const hexToRgb = (hex: string) => {
  const parsedHex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(parsedHex);

  if (!result) throw new Error('Invalid HEX color, cannot convert to RGB');

  const rgbCode = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };

  return rgbCode as RgbColor;
};

const getRgbCode = (hexColor: string) => {
  const rgb: RgbColor = hexToRgb(hexColor);

  return `${rgb.r}, ${rgb.g} , ${rgb.b}`;
};

const opacityToHexNumber = (opacity: number) => {
  return Math.round(opacity * 255).toString(16);
};

export function RGBAToHexA(r: ColorCode, g: ColorCode, b: ColorCode, a: number) {
  if (arguments.length > 4) throw new Error('Too many arguments');
  if (a > 1 || a < 0) throw new Error('Invalid opacity, it should be between 0 and 1');

  return (
    '#' +
    [r, g, b, a]
      .map((value, index) => (index === 3 ? Math.round(value * 255) : value)) // Converts alpha to 255 number
      .map((value) => value.toString(16)) // Converts numbers to hex
      .map((hexValue) => (hexValue.length === 1 ? '0' + hexValue : hexValue)) // Adds 0 when length of one number is 1
      .join('')
  );
}

export function hexWithAlpha(hexColor: string, opacity: number) {
  const parsedHex = hexColor.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => r + r + g + g + b + b);

  if (!isValidHEX(parsedHex)) throw new Error('Invalid HEX param');

  if (opacity > 1 || opacity < 0) throw new Error('Invalid opacity, it should be between 0 and 1');

  return parsedHex + opacityToHexNumber(opacity);
}

export function hexToRGBA(hexColor: string, opacity: number) {
  if (arguments.length > 2) throw new Error('Too many arguments');

  if (!isValidHEX(hexColor)) throw new Error('Invalid HEX param');

  const rgbCode = getRgbCode(hexColor);

  if (opacity > 1 || opacity < 0) throw new Error('Invalid opacity, it should be between 0 and 1');

  return `rgba(${rgbCode}, ${opacity})`;
}

function wrapper(func: () => void) {
  try {
    return func();
  } catch (e) {
    console.error(e);
  }
}

export default {
  hexToRgba: (hexColor: string, opacity: number) => wrapper(() => hexToRGBA(hexColor, opacity)),
  rgbaToHex: (r: ColorCode, g: ColorCode, b: ColorCode, a: number) => wrapper(() => RGBAToHexA(r, g, b, a)),
  hexWithAlpha: (hexColor: string, opacity: number) => wrapper(() => hexWithAlpha(hexColor, opacity)),
};

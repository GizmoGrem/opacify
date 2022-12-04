import { RgbColor, ColorCode } from './types';

const hexToRgb = (hex: string) => {
  const parsedHex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(parsedHex);

  if (!result) return null;

  const rgbCode = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };

  return rgbCode as RgbColor;
};

const getRgbCode = (hexColor: string) => {
  const rgb: RgbColor | null = hexToRgb(hexColor);

  if (rgb !== null) return `${rgb.r}, ${rgb.g} , ${rgb.b}`;
};

const opacityToHexNumber = (opacity: number) => {
  return Math.round(opacity * 255).toString(16);
};

function RGBAToHexA(r: ColorCode, g: ColorCode, b: ColorCode, a: number) {
  let forceRemoveAlpha = false;
  if (arguments.length > 4) return false;
  if (a > 1 || a < 0) forceRemoveAlpha = true;

  return (
    '#' +
    [r, g, b, a]
      .filter((value, index) => !forceRemoveAlpha || index !== 3)
      .map((value, index) => (index === 3 ? Math.round(value * 255) : value)) // Converts alpha to 255 number
      .map((value) => value.toString(16)) // Converts numbers to hex
      .map((hexValue) => (hexValue.length === 1 ? '0' + hexValue : hexValue)) // Adds 0 when length of one number is 1
      .join('')
  );
}

function hexWithAlpha(hexColor: string, opacity: number) {
  const parsedHex = hexColor.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => r + r + g + g + b + b);

  if (opacity > 1 || opacity < 0) return parsedHex;

  return parsedHex + opacityToHexNumber(opacity);
}

function hexToRGBA(hexColor: string, opacity: number) {
  const rgbCode = getRgbCode(hexColor);

  return `rgba(${rgbCode}, ${opacity})`;
}

export default {
  hexToRgba: hexToRGBA,
  rgbaToHex: RGBAToHexA,
  hexWithAlpha,
};

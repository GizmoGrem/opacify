import { RgbColor, ColorCode } from "./types";

const hexToRgb = (hex: string) => {
  const parsedHex = hex.replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => r + r + g + g + b + b
  );

  console.log(hex, parsedHex);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(parsedHex);

  if (!result) return null;

  const rgbCode = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };

  return rgbCode as RgbColor;
};

export const getRgbCode = (hexColor: string) => {
  const rgb: RgbColor | null = hexToRgb(hexColor);

  if (rgb !== null) return `${rgb.r}, ${rgb.g} , ${rgb.b}`;
};

function hexToRgbaOpacity (hexColor: string, opacity: number){
  const rgbCode = getRgbCode(hexColor);

  return `rgba(${rgbCode}, ${opacity})`;
}

function RGBAToHexA(r: ColorCode, g: ColorCode, b: ColorCode, a: number) {
  let forceRemoveAlpha = false;
  if (arguments.length > 4) return false;
  if (a > 1 || a < 0) forceRemoveAlpha = true;

  return (
      "#" +
      [r, g, b, a]
          .filter((number, index) => !forceRemoveAlpha || index !== 3)
          .map((number, index) => (index === 3 ? Math.round(number * 255) : number)) // Converts alpha to 255 number
          .map((number) => number.toString(16)) // Converts numbers to hex
          .map((string) => (string.length === 1 ? "0" + string : string)) // Adds 0 when length of one number is 1
          .join("")
  );
}

export default {
  hexToRgba: hexToRgbaOpacity,
  rgbaToHex: RGBAToHexA,
};

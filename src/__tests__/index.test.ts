import opacify, { hexToRGBA, RGBAToHexA, hexWithAlpha } from '../index';
import { ColorCode } from '../types';

test('HEX to HEXA', () => {
  expect(opacify.hexWithAlpha('#e61e4d', 0.5)).toBe('#e61e4d80');
});
test('HEX to HEXA with invalid params', () => {
  function invalidParams(hexColor: string, opacity: number) {
    hexWithAlpha(hexColor, opacity);
  }

  expect(() => invalidParams('#e61e4d', 12)).toThrowErrorMatchingSnapshot('opacity 12');
  expect(() => invalidParams('#e61e4jsnjkngd', 0.4)).toThrowErrorMatchingSnapshot('invalid color');
});

test('HEX to RGBA', () => {
  expect(opacify.hexToRgba('#e61e4d', 0.5)).toBe('rgba(230, 30 , 77, 0.5)');
});
test('HEX to RGBA with invalid params', () => {
  function invalidParams(hexColor: string, opacity: number) {
    hexToRGBA(hexColor, opacity);
  }

  expect(() => invalidParams('#e61e4d', 12)).toThrowErrorMatchingSnapshot('opacity 12');
  expect(() => invalidParams('#e61e4jsnjkngd', 0.4)).toThrowErrorMatchingSnapshot('invalid color');
});

test('RGB to HEXA', () => {
  expect(opacify.rgbaToHex(230, 30, 77, 0.5)).toBe('#e61e4d80');
});

test('RGB to HEXA with invalid params', () => {
  function invalidParams(r: ColorCode, g: ColorCode, b: ColorCode, opacity: number) {
    RGBAToHexA(r, g, b, opacity);
  }

  expect(() => invalidParams(230, 30, 77, 10)).toThrowErrorMatchingSnapshot('opacity 10');
});

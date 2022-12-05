import { ColorCode } from './types';
export declare function RGBAToHexA(r: ColorCode, g: ColorCode, b: ColorCode, a: number): string;
export declare function hexWithAlpha(hexColor: string, opacity: number): string;
export declare function hexToRGBA(hexColor: string, opacity: number): string;
declare const _default: {
    hexToRgba: (hexColor: string, opacity: number) => void;
    rgbaToHex: (r: ColorCode, g: ColorCode, b: ColorCode, a: number) => void;
    hexWithAlpha: (hexColor: string, opacity: number) => void;
};
export default _default;

import { ColorCode } from "./types";
declare function RGBAToHexA(r: ColorCode, g: ColorCode, b: ColorCode, a: number): string | false;
declare function hexWithAlpha(hexColor: string, opacity: number): string;
declare function hexToRGBA(hexColor: string, opacity: number): string;
declare const _default: {
    hexToRgba: typeof hexToRGBA;
    rgbaToHex: typeof RGBAToHexA;
    hexWithAlpha: typeof hexWithAlpha;
};
export default _default;

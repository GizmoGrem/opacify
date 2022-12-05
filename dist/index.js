"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hexToRgb = function (hex) {
    var parsedHex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) { return r + r + g + g + b + b; });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(parsedHex);
    if (!result)
        return null;
    var rgbCode = {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    };
    return rgbCode;
};
var getRgbCode = function (hexColor) {
    var rgb = hexToRgb(hexColor);
    if (rgb === null)
        return false;
    return "".concat(rgb.r, ", ").concat(rgb.g, " , ").concat(rgb.b);
};
var opacityToHexNumber = function (opacity) {
    return Math.round(opacity * 255).toString(16);
};
function RGBAToHexA(r, g, b, a) {
    var forceRemoveAlpha = false;
    if (arguments.length > 4)
        return false;
    if (a > 1 || a < 0)
        forceRemoveAlpha = true;
    return ('#' +
        [r, g, b, a]
            .filter(function (value, index) { return !forceRemoveAlpha || index !== 3; })
            .map(function (value, index) { return (index === 3 ? Math.round(value * 255) : value); }) // Converts alpha to 255 number
            .map(function (value) { return value.toString(16); }) // Converts numbers to hex
            .map(function (hexValue) { return (hexValue.length === 1 ? '0' + hexValue : hexValue); }) // Adds 0 when length of one number is 1
            .join(''));
}
function hexWithAlpha(hexColor, opacity) {
    var parsedHex = hexColor.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) { return r + r + g + g + b + b; });
    if (opacity > 1 || opacity < 0)
        return parsedHex;
    return parsedHex + opacityToHexNumber(opacity);
}
function hexToRGBA(hexColor, opacity) {
    if (arguments.length > 2)
        return false;
    var rgbCode = getRgbCode(hexColor);
    if (!rgbCode)
        return false;
    return "rgba(".concat(rgbCode, ", ").concat(opacity, ")");
}
exports.default = {
    hexToRgba: hexToRGBA,
    rgbaToHex: RGBAToHexA,
    hexWithAlpha: hexWithAlpha,
};

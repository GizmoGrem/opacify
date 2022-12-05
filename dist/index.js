"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToRGBA = exports.hexWithAlpha = exports.RGBAToHexA = void 0;
var isValidHEX = function (hex) { return /^#[0-9A-F]{6}$/i.test(hex); };
var hexToRgb = function (hex) {
    var parsedHex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) { return r + r + g + g + b + b; });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(parsedHex);
    if (!result)
        throw new Error('Invalid HEX color, cannot convert to RGB');
    var rgbCode = {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    };
    return rgbCode;
};
var getRgbCode = function (hexColor) {
    var rgb = hexToRgb(hexColor);
    return "".concat(rgb.r, ", ").concat(rgb.g, " , ").concat(rgb.b);
};
var opacityToHexNumber = function (opacity) {
    return Math.round(opacity * 255).toString(16);
};
function RGBAToHexA(r, g, b, a) {
    if (arguments.length > 4)
        throw new Error('Too many arguments');
    if (a > 1 || a < 0)
        throw new Error('Invalid opacity, it should be between 0 and 1');
    return ('#' +
        [r, g, b, a]
            .map(function (value, index) { return (index === 3 ? Math.round(value * 255) : value); }) // Converts alpha to 255 number
            .map(function (value) { return value.toString(16); }) // Converts numbers to hex
            .map(function (hexValue) { return (hexValue.length === 1 ? '0' + hexValue : hexValue); }) // Adds 0 when length of one number is 1
            .join(''));
}
exports.RGBAToHexA = RGBAToHexA;
function hexWithAlpha(hexColor, opacity) {
    var parsedHex = hexColor.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) { return r + r + g + g + b + b; });
    if (!isValidHEX(parsedHex))
        throw new Error('Invalid HEX param');
    if (opacity > 1 || opacity < 0)
        throw new Error('Invalid opacity, it should be between 0 and 1');
    return parsedHex + opacityToHexNumber(opacity);
}
exports.hexWithAlpha = hexWithAlpha;
function hexToRGBA(hexColor, opacity) {
    if (arguments.length > 2)
        throw new Error('Too many arguments');
    if (!isValidHEX(hexColor))
        throw new Error('Invalid HEX param');
    var rgbCode = getRgbCode(hexColor);
    if (opacity > 1 || opacity < 0)
        throw new Error('Invalid opacity, it should be between 0 and 1');
    return "rgba(".concat(rgbCode, ", ").concat(opacity, ")");
}
exports.hexToRGBA = hexToRGBA;
function wrapper(func) {
    try {
        return func();
    }
    catch (e) {
        console.error(e);
    }
}
exports.default = {
    hexToRgba: function (hexColor, opacity) { return wrapper(function () { return hexToRGBA(hexColor, opacity); }); },
    rgbaToHex: function (r, g, b, a) { return wrapper(function () { return RGBAToHexA(r, g, b, a); }); },
    hexWithAlpha: function (hexColor, opacity) { return wrapper(function () { return hexWithAlpha(hexColor, opacity); }); },
};

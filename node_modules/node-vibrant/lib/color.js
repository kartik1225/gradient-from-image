"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var filter = require("lodash/filter");
var Swatch = /** @class */ (function () {
    function Swatch(rgb, population) {
        this._rgb = rgb;
        this._population = population;
    }
    Swatch.applyFilter = function (colors, f) {
        return typeof f === 'function'
            ? filter(colors, function (_a) {
                var r = _a.r, g = _a.g, b = _a.b;
                return f(r, g, b, 255);
            })
            : colors;
    };
    Object.defineProperty(Swatch.prototype, "r", {
        get: function () { return this._rgb[0]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Swatch.prototype, "g", {
        get: function () { return this._rgb[1]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Swatch.prototype, "b", {
        get: function () { return this._rgb[2]; },
        enumerable: true,
        configurable: true
    });
    Swatch.prototype.getRgb = function () { return this._rgb; };
    Swatch.prototype.getHsl = function () {
        if (!this._hsl) {
            var _a = this._rgb, r = _a[0], g = _a[1], b = _a[2];
            this._hsl = util_1.rgbToHsl(r, g, b);
        }
        return this._hsl;
    };
    Swatch.prototype.getPopulation = function () { return this._population; };
    Swatch.prototype.getHex = function () {
        if (!this._hex) {
            var _a = this._rgb, r = _a[0], g = _a[1], b = _a[2];
            this._hex = util_1.rgbToHex(r, g, b);
        }
        return this._hex;
    };
    Swatch.prototype.getYiq = function () {
        if (!this._yiq) {
            var rgb = this._rgb;
            this._yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
        }
        return this._yiq;
    };
    Swatch.prototype.getTitleTextColor = function () {
        return this.getYiq() < 200 ? '#fff' : '#000';
    };
    Swatch.prototype.getBodyTextColor = function () {
        return this.getYiq() < 150 ? '#fff' : '#000';
    };
    return Swatch;
}());
exports.Swatch = Swatch;
//# sourceMappingURL=color.js.map
import { Filter } from './typing';
export interface Vec3 extends Array<number> {
    0: number;
    1: number;
    2: number;
}
export interface Palette {
    Vibrant?: Swatch;
    Muted?: Swatch;
    DarkVibrant?: Swatch;
    DarkMuted?: Swatch;
    LightVibrant?: Swatch;
    LightMuted?: Swatch;
    [name: string]: Swatch;
}
export declare class Swatch {
    static applyFilter(colors: Swatch[], f: Filter): Swatch[];
    private _hsl;
    private _rgb;
    private _yiq;
    private _population;
    private _hex;
    readonly r: number;
    readonly g: number;
    readonly b: number;
    getRgb(): Vec3;
    getHsl(): Vec3;
    getPopulation(): number;
    getHex(): string;
    private getYiq();
    getTitleTextColor(): string;
    getBodyTextColor(): string;
    constructor(rgb: Vec3, population: number);
}

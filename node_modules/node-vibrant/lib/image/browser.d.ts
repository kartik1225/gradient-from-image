/// <reference types="bluebird" />
import * as Bluebird from 'bluebird';
import { ImageData, ImageSource } from '../typing';
import { ImageBase } from './base';
export default class BroswerImage extends ImageBase {
    image: HTMLImageElement;
    private _canvas;
    private _context;
    private _width;
    private _height;
    private _initCanvas();
    load(image: ImageSource): Bluebird<ImageBase>;
    clear(): void;
    update(imageData: ImageData): void;
    getWidth(): number;
    getHeight(): number;
    resize(targetWidth: number, targetHeight: number, ratio: number): void;
    getPixelCount(): number;
    getImageData(): ImageData;
    remove(): void;
}

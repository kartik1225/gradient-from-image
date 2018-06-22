/// <reference types="bluebird" />
import * as Bluebird from 'bluebird';
import { ImageData, ImageSource } from '../typing';
import { ImageBase } from './base';
export default class NodeImage extends ImageBase {
    private _image;
    private _loadByProtocolHandler(handler, src);
    private _loadFromPath(src);
    private _loadByJimp(src);
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

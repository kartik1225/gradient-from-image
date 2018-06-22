/// <reference types="mocha" />
import { VibrantStatic } from '../../typing';
import Builder from '../../builder';
import { Sample, SamplePathKey } from './data';
export declare const testVibrant: (Vibrant: VibrantStatic, sample: Sample, done: MochaDone, pathKey?: SamplePathKey, builderCallback?: (b: Builder) => Builder, references?: any) => void;
export declare const testVibrantAsPromised: (Vibrant: VibrantStatic, sample: Sample, pathKey?: SamplePathKey, builderCallback?: (b: Builder) => Builder, references?: any) => void;

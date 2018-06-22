export declare const TEST_PORT = 3444;
export declare const REFERENCE_PALETTE: any;
export declare const REFERENCE_PALETTE_WITH_FILTER: any;
export declare const TARGETS: string[];
export interface Sample {
    i: number;
    fileName: string;
    filePath: string;
    url: string;
    relativeUrl: string;
}
export declare type SamplePathKey = 'filePath' | 'url' | 'relativeUrl';
export declare const SAMPLES: Sample[];

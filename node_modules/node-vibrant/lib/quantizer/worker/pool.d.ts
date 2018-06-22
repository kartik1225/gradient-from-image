/// <reference types="bluebird" />
import Bluebird = require('bluebird');
import { Swatch } from '../../color';
import { Pixels, ComputedOptions } from '../../typing';
export default class WorkerPool {
    private static _instance;
    private static _task_id;
    static readonly instance: WorkerPool;
    private _workers;
    private _queue;
    private _executing;
    private _findIdleWorker();
    private _enqueue(pixels, opts);
    private _tryDequeue();
    private _onMessage(workerId, event);
    quantize(pixels: Pixels, opts: ComputedOptions): Bluebird<Swatch[]>;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vibrant = require("./browser");
var worker_1 = require("./quantizer/worker");
(function (ns) {
    ns.Vibrant = Vibrant;
    Vibrant.Quantizer.WebWorker = worker_1.default;
})((typeof window === 'object' && window instanceof Window) ? window : module.exports);
//# sourceMappingURL=bundle.worker.js.map
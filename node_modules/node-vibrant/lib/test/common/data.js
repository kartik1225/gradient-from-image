"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var path = require("path");
exports.TEST_PORT = 3444;
// Values from actual execution in different browsers.
// Qualiy is set to 1 and not filters are used since downsampling are inconsistent
// across browsers.
// Comfirmed visually and established as baseline for future versions
exports.REFERENCE_PALETTE = require('../../../data/browser-palette-ref.json');
exports.REFERENCE_PALETTE_WITH_FILTER = require('../../../data/browser-palette-with-filter-ref.json');
exports.TARGETS = Object.keys(exports.REFERENCE_PALETTE);
exports.SAMPLES = _.range(1, 5).map(function (i) { return ({
    i: i,
    fileName: i + ".jpg",
    filePath: path.join(__dirname, "../../../data/" + i + ".jpg"),
    url: "http://localhost:" + exports.TEST_PORT + "/" + i + ".jpg",
    relativeUrl: "base/data/" + i + ".jpg"
}); });
//# sourceMappingURL=data.js.map
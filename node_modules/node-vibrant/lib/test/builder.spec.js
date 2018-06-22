"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Vibrant = require("../index");
var omit = require("lodash/omit");
describe('builder', function () {
    it('modifies Vibrant options', function () {
        var NOT_A_FILTER = function () { };
        var v = Vibrant.from('NOT_A_PATH')
            .maxColorCount(23)
            .quality(7)
            .useImageClass('NOT_AN_IMAGE')
            .useGenerator('NOT_A_GENERATOR')
            .useQuantizer('NOT_A_QUANTIZER')
            .clearFilters()
            .addFilter(NOT_A_FILTER)
            .build();
        var expected = {
            colorCount: 23,
            quality: 7,
            ImageClass: 'NOT_AN_IMAGE',
            quantizer: 'NOT_A_QUANTIZER',
            generator: 'NOT_A_GENERATOR',
            filters: [NOT_A_FILTER]
        };
        chai_1.expect(v.opts.combinedFilter, 'should have combined filter').to.be.a('function');
        chai_1.expect(omit(v.opts, 'combinedFilter')).to.deep.equal(expected);
    });
});
//# sourceMappingURL=builder.spec.js.map
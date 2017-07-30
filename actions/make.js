'use strict';

const Generate = require('../generators/generator.js')

module.exports = function (args, callback) {
    if (args.type === 'module') {
        Generate.module(args.name);
    } else if (args.type === 'component') {
        if (args.options.stateless) {
            Generate.component(args.name, true)
        } else {
            Generate.component(args.name);
        }
    }
    callback();
}
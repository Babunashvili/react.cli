'use strict';

const Generate = require('../generators/generator.js')
/**
 * @param  {Object} args
 * @param  {Function} callback
 */
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
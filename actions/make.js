const Generate = require('../generators/generator.js')

module.exports = function (args, callback) {
    if (args.type === 'module') {
        Generate.module(args.name);
    } else if (args.type === 'component') {
        Generate.component(args.name);
    }
    callback();
}
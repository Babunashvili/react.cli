'use strict';

const removeDirectory = require('../helper.js').removeDirectory;
const modulesDir = './src/app/modules';
const componentsDir = './src/app/components';
const logger = require('../helper.js').logger;
/**
 * @param  {Object} args
 * @param  {Function} callback
 */
module.exports = function (args, callback) {
    if (args.type === 'module') {
        // Remove Module
        let remove = removeDirectory(`${modulesDir}/${args.name}`);

        if (remove.success) {
            // Success message
            logger('success', `Module <${args.name}> removed successfuly.`);
        } else {
            // Fail Message
            logger('fail', remove.msg);
        }
    } else if (args.type === 'component') {
        // Remove Component
        let remove = removeDirectory(`${componentsDir}/${args.name}`);

        if (remove.success) {
            // Success message
            logger('success', `Component <${args.name}> removed successfuly.`);
        } else {
            // Fail Message
            logger('fail', remove.msg);
        }
    }
    callback();
}
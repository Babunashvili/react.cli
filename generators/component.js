'use strict';

const fs = require('fs');
const toCapitalize = require('../helper.js').toCapitalize;
const logger = require('../helper.js').logger;
const removeDirectory = require('../helper.js').removeDirectory;
const componentTemplate = require('../templates/componentTemplate.js')
const componentScssTemplate = require('../templates/componentScssTemplate.js')
const componentStatelessTemplate = require('../templates/componentStatelessTemplate.js')
const componentsDir = './src/app/components';

module.exports = function (name, stateless = false) {
    name = toCapitalize(name)
    // create components directory if not exists
    if (!fs.existsSync(componentsDir)) {
        fs.mkdirSync(componentsDir);
    }

    // remove old component before create
    if (fs.existsSync(`${componentsDir}/${name}`)) {
        removeDirectory(`${componentsDir}/${name}`)
    }

    fs.mkdirSync(`${componentsDir}/${name}`);
    fs.writeFileSync(`${componentsDir}/${name}/${name}.jsx`, (stateless) ? componentStatelessTemplate(name) : componentTemplate(name), 'utf8');
    fs.writeFileSync(`${componentsDir}/${name}/${name}.scss`, componentScssTemplate(name), 'utf8');

    // Success message
    logger('success', `Component <${name}> generated successfuly.`);
}
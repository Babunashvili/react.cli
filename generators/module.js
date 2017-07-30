'use strict';

const fs = require('fs');
const toCapitalize = require('../helper.js').toCapitalize;
const logger = require('../helper.js').logger;
const removeDirectory = require('../helper.js').removeDirectory;
const moduleTemplate = require('../templates/moduleTemplate.js');
const reducerTemplate = require('../templates/reducerTemplate.js');
const modulesDir = './src/app/modules';

/**
 * @param  {String} name
 */
module.exports = function (name) {
    name = name.toLowerCase();
    // create modules directory if not exists
    if (!fs.existsSync(modulesDir)) {
        fs.mkdirSync(modulesDir);
    }

    // remove old module before create
    if (fs.existsSync(`${modulesDir}/${name}`)) {
        removeDirectory(`${modulesDir}/${name}`)
    }

    // create directory and files for module
    fs.mkdirSync(`${modulesDir}/${name}`);
    fs.mkdirSync(`${modulesDir}/${name}/scenes`);
    fs.mkdirSync(`${modulesDir}/${name}/actions`);
    fs.writeFileSync(`${modulesDir}/${name}/scenes/${toCapitalize(name)}.jsx`, moduleTemplate(name), 'utf8');
    fs.writeFileSync(`${modulesDir}/${name}/${name}Reducer.js`, reducerTemplate(name), 'utf8');
    fs.writeFileSync(`${modulesDir}/${name}/${name}Sagas.js`, '', 'utf8');
    fs.writeFileSync(`${modulesDir}/${name}/actions/${name}Actions.js`, '', 'utf8');
    fs.writeFileSync(`${modulesDir}/${name}/actions/${name}Types.js`, '', 'utf8');

    // Success message
    logger('success', `Module <${name}> generated successfuly.`);
}
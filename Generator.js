'use strict';

var fs = require('fs');
var helper = require('./helper.js');
var template = require('./templates.js');

function Generator() {

    var that = this;
    this.modulesDir = './src/app/modules';
    this.componentsDir = './src/app/components';

    // Make Module
    this.makeModule = function (name) {

        // create modules directory if not exists
        if (!fs.existsSync(that.modulesDir)) {
            fs.mkdirSync(that.modulesDir);
        }

        // remove old module before create
        if (fs.existsSync(`${that.modulesDir}/${name}`)) {
            helper.removeDirectory(`${that.modulesDir}/${name}`)
        }

        // create directory and files for module
        fs.mkdirSync(`${that.modulesDir}/${name}`);
        fs.mkdirSync(`${that.modulesDir}/${name}/scenes`);
        fs.mkdirSync(`${that.modulesDir}/${name}/actions`);
        fs.writeFileSync(`${that.modulesDir}/${name}/scenes/${helper.toCapitalize(name)}.jsx`, template.moduleTemplate(name), 'utf8');
        fs.writeFileSync(`${that.modulesDir}/${name}/${name}Reducer.js`, template.reducerTemplate(name), 'utf8');
        fs.writeFileSync(`${that.modulesDir}/${name}/${name}Sagas.js`, '', 'utf8');
        fs.writeFileSync(`${that.modulesDir}/${name}/actions/${name}Actions.js`, '', 'utf8');
        fs.writeFileSync(`${that.modulesDir}/${name}/actions/${name}Types.js`, '', 'utf8');

        // Success message
        helper.logger('success', `Module <${name}> generated successfuly.`);
    }

    // Make Component
    this.makeComponent = function (name) {
        // create components directory if not exists
        if (!fs.existsSync(that.componentsDir)) {
            fs.mkdirSync(that.componentsDir);
        }

        // remove old component before create
        if (fs.existsSync(`${that.componentsDir}/${name}`)) {
            helper.removeDirectory(`${that.componentsDir}/${name}`)
        }

        fs.mkdirSync(`${that.componentsDir}/${name}`);
        fs.writeFileSync(`${that.componentsDir}/${name}/${helper.toCapitalize(name)}.jsx`, template.componentTemplate(name), 'utf8');
        fs.writeFileSync(`${that.componentsDir}/${name}/${helper.toCapitalize(name)}.scss`, template.componentScssTemplate(name), 'utf8');

        // Success message
        helper.logger('success', `Component <${name}> generated successfuly.`);
    }

    // Remove Module
    this.removeModule = function (name) {
        helper.removeDirectory(`${that.modulesDir}/${name}`)
    }

    // Remove Component
    this.removeComponent = function (name) {
        helper.removeDirectory(`${that.componentsDir}/${name}`)
    }

}

module.exports = Generator;
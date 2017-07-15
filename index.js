#!/usr/bin/env node

'use strict';

var program = require('commander');
var Generator = require('./Generator.js');
var generate = new Generator();


var makeCMD = function (type, name, options) {
    if (type === 'module') {
        generate.makeModule(name);
    } else if (type === 'component') {
        generate.makeComponent(name);
    } else {
        helper.logger('fail', `Invalid argument ${type}`);
    }
}

var removeCMD = function (type, name, options) {
    if (type === 'module') {
        generate.removeModule(name);
    } else if (type === 'component') {
        generate.removeComponent(name);
    } else {
        helper.logger('fail', `Invalid argument ${type}`);
    }
}
program
    .version('0.1.0')

program
    .command('make [type] [name]')
    .action(makeCMD);

program
    .command('remove [type] [name]')
    .action(removeCMD);

program.parse(process.argv);
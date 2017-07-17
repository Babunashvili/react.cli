#!/usr/bin/env node

'use strict';

var helper = require('./helper.js');
var program = require('commander');
var Generator = require('./Generator.js');
var generate = new Generator();

var CMD = function (action, type, name) {
    if (action === 'make') {
        if (type === 'module') {
            if (typeof name === 'undefined') {
                helper.logger('fail', 'Missing argument [name] for `react <action> [type] [name]`.');
            } else {
                generate.makeModule(name);
            }
        } else if (type === 'component') {
            if (typeof name === 'undefined') {
                helper.logger('fail', 'Missing argument [name] for `react <action> [type] [name]`.');
            } else {
                generate.makeComponent(name);
            }
        } else {
            if (typeof type !== 'undefined') {
                helper.logger('fail', `Invalid argument '${type}'.`);
            } else {
                helper.logger('fail', 'Missing argument [type] for `react <action> [type] [name]`.');
            }
        }
    } else if (action === 'remove') {
        if (type === 'module') {
            if (typeof name === 'undefined') {
                helper.logger('fail', 'Missing argument [name] for `react <action> [type] [name]`.');
            } else {
                generate.removeModule(name);
            }
        } else if (type === 'component') {
            if (typeof name === 'undefined') {
                helper.logger('fail', 'Missing argument [name] for `react <action> [type] [name]`.');
            } else {
                generate.removeComponent(name);
            }
        } else {
            if (typeof type !== 'undefined') {
                helper.logger('fail', `Invalid argument '${type}'.`);
            } else {
                helper.logger('fail', 'Missing argument [type] for `react <action> [type] [name]`.');
            }
        }
    } else {
        helper.logger('fail', 'Missing or invalid argument <action> for `react <action> [type] [name]`.');
    }
}

program
    .version('2.0.0')
    .on('--help', function () {
        console.log('');
        console.log('  Examples:');
        console.log('');
        console.log('    $ react make component Button');
        console.log('    $ react remove component Button');
        console.log('    $ react make module users');
        console.log('    $ react remove module users');
        console.log('');
    })
    .command('<action> [type] [name]', 'Make/Remove specific element.')
    .action(CMD);

program.parse(process.argv);
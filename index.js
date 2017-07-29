#!/usr/bin/env node

'use strict';

const vorpal = require('vorpal')();
const make = require('./actions/make.js');

vorpal
    .command('make <type> <name>')
    .option('-v, --verbose', 'Print foobar instead.')
    .description('Create project component.')
    .action(make);

vorpal
    .delimiter('react$')
    .show();
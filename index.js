#!/usr/bin/env node

'use strict';

const vorpal = require('vorpal')();
const make = require('./actions/make.js');
const remove = require('./actions/remove.js');

vorpal
    .command('make <type> <name>')
    .option('-sl, --stateless', 'Create Stateless component.')
    .description('Create project component.')
    .action(make);

vorpal
    .command('remove <type> <name>')
    .description('Create project component.')
    .action(remove);

vorpal
    .delimiter('react$')
    .show();
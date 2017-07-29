'use strict';

const componentGenerator = require('./component.js')
const moduleGenerator = require('./module.js')

module.exports = {
    module: moduleGenerator,
    component: componentGenerator,
}
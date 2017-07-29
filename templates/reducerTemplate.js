// Generate Reducer Template
module.exports = function (name) {
    return `import {
  fromJS
} from 'immutable'
import * as ${name}Types from './actions/${name}Types'`;
}
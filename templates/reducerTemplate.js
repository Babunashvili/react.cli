// Generate Reducer Template

/**
 * @param  {String} name
 */
module.exports = function (name) {
  return `import {
  fromJS
} from 'immutable'
import * as ${name}Types from './actions/${name}Types'`;
}
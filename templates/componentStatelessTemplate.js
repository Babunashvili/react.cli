// Generate Stateless Component Template

/**
 * @param  {String} name
 */
module.exports = function (name) {
    return `import React, { PropTypes } from 'react'

const ${name} = props => (
   <div>Component</div>
);

${name}.propTypes = {}

export default ${name}`;
}
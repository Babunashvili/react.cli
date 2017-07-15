var helper = require('./helper.js');

// Generate Module Template
module.exports.moduleTemplate = function (name) {
    return `import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class ${helper.toCapitalize(name)} extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>${name} Module</div>
        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

${helper.toCapitalize(name)}.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(${helper.toCapitalize(name)})`;
}

// Generate Reducer Template
module.exports.reducerTemplate = function (name) {
    return `import {
  fromJS
} from 'immutable'
import * as ${name}Types from './actions/${name}Types'`;
}

// Generate Component Template
module.exports.componentTemplate = function (name) {
    return `import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'`;
}

// Generate Component SCSS Template
module.exports.componentScssTemplate = function (name) {
    return `/* ${name} Component */

.${name.toLowerCase()}{}`;
}
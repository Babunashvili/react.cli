// Generate Module Template

const toCapitalize = require('../helper.js').toCapitalize;

/**
 * @param  {String} name
 */
module.exports = function (name) {
    return `import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
class ${toCapitalize(name)} extends Component {
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
${toCapitalize(name)}.propTypes = {}
export default connect(mapStateToProps, mapDispatchToProps)(${toCapitalize(name)})`;
}
// Generate Component Template

/**
 * @param  {String} name
 */
module.exports = function (name) {
    return `import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

${name}.propTypes = {}`;
}
// Generate Component Template
module.exports = function (name) {
    return `import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

${name}.propTypes = {}`;
}
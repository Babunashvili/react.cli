import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class User extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>user Module</div>
        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

User.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(User)
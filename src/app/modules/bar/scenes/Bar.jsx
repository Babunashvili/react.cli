import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
class Bar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>bar Module</div>
        )
    }
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
Bar.propTypes = {}
export default connect(mapStateToProps, mapDispatchToProps)(Bar)
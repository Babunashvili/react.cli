import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
class Baz extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>baz Module</div>
        )
    }
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
Baz.propTypes = {}
export default connect(mapStateToProps, mapDispatchToProps)(Baz)
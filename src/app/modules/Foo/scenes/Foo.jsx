import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
class Foo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>Foo Module</div>
        )
    }
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
Foo.propTypes = {}
export default connect(mapStateToProps, mapDispatchToProps)(Foo)
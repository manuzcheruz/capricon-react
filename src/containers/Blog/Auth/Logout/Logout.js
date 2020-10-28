import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/actions/index';

class Logout extends Component {
    componentDidMount () {
        this.props.onLogout()
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapPropsToDispatch = dispatch => {
    return {
        onLogout: () => dispatch()
    }
}

export default connect(null, mapPropsToDispatch)(Logout);
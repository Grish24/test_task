import React, {Component} from 'react';
import Welcome from './Welcome'
import {connect} from 'react-redux'

class WelcomeContainer extends Component {
    render() {
        return (
            <Welcome />
        );
    }
}

export default connect()(WelcomeContainer);
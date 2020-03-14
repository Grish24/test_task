import React, {Component} from 'react';
import {connect} from 'react-redux'
import CreateDone from './CreateDone'

class CreateDoneContainer extends Component {
    render() {
        return (
            <CreateDone/>
        );
    }
}

export default connect()(CreateDoneContainer);
import React, {Component} from 'react';
import Welcome from './Welcome'
import {connect} from 'react-redux'

class WelcomeContainer extends Component {
    render() {
        return (
            <Welcome store={this.props.store}/>
        );
    }
}
const mapStateToProps = state => {
    return {
        store:state,
    }
};


export default connect(mapStateToProps,null)(WelcomeContainer);
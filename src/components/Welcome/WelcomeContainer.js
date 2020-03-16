import React, {Component} from 'react';
import Welcome from './Welcome'
import {connect} from 'react-redux'


class WelcomeContainer extends Component {
    render() {
        return (
            <Welcome store={this.props.store}
                     color={this.props.color}
            />
        );
    }
}
const mapStateToProps = state => {
    return {
        store:state,
        color:state.createStyle.color_scheme,
    }
};


export default connect(mapStateToProps,null)(WelcomeContainer);
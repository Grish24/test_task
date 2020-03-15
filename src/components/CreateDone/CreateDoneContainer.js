import React, {Component} from 'react';
import {connect} from 'react-redux'
import CreateDone from './CreateDone'

class CreateDoneContainer extends Component {
    render() {
        return (
            <CreateDone name={this.props.name}/>
        );
    }
}
const mapStateToProps = state => {
    return {
        name:state.createName.name,
    }
};
export default connect(mapStateToProps,null)(CreateDoneContainer);
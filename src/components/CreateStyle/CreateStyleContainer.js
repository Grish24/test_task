import React, {Component} from 'react';
import {connect} from 'react-redux'
import CreateStyle from "./CreateStyle";
// import {} from "../../store/createName/actions";

class CreateStyleContainer extends Component {
    render() {
        return (
            <CreateStyle name={this.props.name}/>
        );
    }
}
const mapStateToProps = state => {
    return {
        name:state.createName.name
    }
};

export default connect(mapStateToProps,null)(CreateStyleContainer);
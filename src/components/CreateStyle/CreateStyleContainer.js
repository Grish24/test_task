import React, {Component} from 'react';
import {connect} from 'react-redux'
import CreateStyle from "./CreateStyle";
import {setImagePath,setStep} from "../../store/actions/createStyle";

class CreateStyleContainer extends Component {
    render() {
        return (
            <CreateStyle name={this.props.name}
                         setImagePath={this.props.setImagePath}
                         setStep={this.props.setStep}

            />
        );
    }
}
const mapStateToProps = state => {
    return {
        name:state.createName.name
    }
};
const mapDispatchToProps = {
    setImagePath,
    setStep
};

export default connect(mapStateToProps,mapDispatchToProps)(CreateStyleContainer);
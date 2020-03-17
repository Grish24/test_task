import React, {Component} from 'react';
import {connect} from 'react-redux'
import CreateStyle from "./CreateStyle";
import {setCreatGender, setCreateColor,setStep} from "../../store/actions/createStyle";

class CreateStyleContainer extends Component {
    render() {
        return (
            <CreateStyle name={this.props.name}
                         setCreatGender={this.props.setCreatGender}
                         setCreateColor={this.props.setCreateColor}
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
    setCreatGender,
    setCreateColor,
    setStep
};

export default connect(mapStateToProps,mapDispatchToProps)(CreateStyleContainer);
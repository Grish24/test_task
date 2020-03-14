import React, {Component} from 'react';
import {connect} from 'react-redux'
import CreateName from "./CreateName";
import {setCreateName,setStep} from '../../store/createName/actions'

class CreateNameContainer extends Component {
    render() {
        return (
                <CreateName setCreateName={this.props.setCreateName}
                            setStep={this.props.setStep}
                            name={this.props.name}
                />
        );
    }
}

const mapStateToProps = state => {
    return {
        name:state.createName.name,
        step:state.createName.step_first
    }
};
const mapDispatchToProps = {
    setCreateName,
    setStep,
};

export default connect(mapStateToProps,mapDispatchToProps)(CreateNameContainer);
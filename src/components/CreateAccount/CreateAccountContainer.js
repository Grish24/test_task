import React, {Component} from 'react';
import {connect} from 'react-redux'
import CreateAccount from "./CreateAccount";
import {setFirstName,setLastName,setEmail,setPassword,setStep} from '../../store/createAccount/actions';

class CreateAccountContainer extends Component {
    render() {
        return (
            <CreateAccount  name={this.props.name}
                            lastName={this.props.last_name}
                            email={this.props.email}
                            password={this.props.password}
                            setFirstName={this.props.setFirstName}
                           setLastName={this.props.setLastName}
                           setEmail={this.props.setEmail}
                           setPassword={this.props.setPassword}
                           setStep={this.props.setStep}
            />
        );
    }
}
const mapStateToProps = state => {
    return {
        name:state.createAccount.first_name,
        last_name:state.createAccount.last_name,
        email:state.createAccount.email,
        password:state.createAccount.password,
    }
};
const mapDispatchToProps = {
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setStep
};
export default connect(mapStateToProps,mapDispatchToProps)(CreateAccountContainer);
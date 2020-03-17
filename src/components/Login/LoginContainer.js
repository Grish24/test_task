import React, {Component} from 'react';
import {connect} from 'react-redux'
import Login from "./Login";
import {setEmail,setPassword} from '../../store/actions/login'

class LoginContainer extends Component {
    render() {
        return (
            <Login history={this.props.history}
                   store={this.props.store}
                   email={this.props.email}
                   password={this.props.password}
                   setEmail={this.props.setEmail}
                   setPassword={this.props.setPassword}

            />
        );
    }
}
const mapStateToProps = state => {
    return {
        store:state,
        email:state.login.email,
        password:state.login.password
    }
};
const mapDispatchToProps = {
    setEmail,
    setPassword,
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);
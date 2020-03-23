import React, {Component} from 'react';
import './CreateAccount.scss'
import {Link} from "react-router-dom";
import google_icon from '../../assets/images/google_icon.svg';
import eye_icon from "../../assets/images/eye_icon.svg";
import eye_icon_invisible from "../../assets/images/eye_icon_invisible.svg";

class CreateAccount extends Component {
    state={
        eye_icon:false
    };

    onChangeFirstName = (event) => {
        this.props.setFirstName(event.target.value)
    };
    onChangeLastName = (event) => {
        this.props.setLastName(event.target.value)
    };
    onChangeEmail = (event) => {
        this.props.setEmail(event.target.value)
    };
    onChangePassword = (event) => {
        this.props.setPassword(event.target.value)
    };
    showPassword = () =>{
        if (this.refs.password.type === 'password'){
            this.refs.password.type = 'text';
            this.setState({
                eye_icon:true
            })
        } else {
            this.refs.password.type = 'password';
            this.setState({
                eye_icon:false
            })
        }
    };
    onChangeStep = () => {
        this.props.setStep(true);
    };
    render() {
        return (
            <div className='create_account'>
                <h3>Create your account</h3>
                <button className='google_sign_up'>
                    <img src={google_icon} alt="googleIcon"/>
                    Sign Up with Google
                </button>
                <div className='splitter'>
                    <span>or</span>
                </div>
                <form className='registration_form'>
                    <div className="form_group">
                        <div className='form_group_name'>
                            <input type="text"
                                   id="first_name"
                                   className="form_input"
                                   placeholder="First name"
                                   required
                                   value={this.props.name}
                                   onChange={this.onChangeFirstName}
                            />
                            <input type="text"
                                   id="last_name"
                                   className="form_input"
                                   placeholder="Last name"
                                   required
                                   value={this.props.last_name}
                                   onChange={this.onChangeLastName}
                            />
                        </div>
                    </div>
                    <div className="form_group">
                        <input type="email"
                               id="email"
                               className="form_input"
                               required
                               placeholder="Email"
                               value={this.props.email}
                               onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className='form_wrapper'>
                        <div className="form_group">
                            <input type="password"
                                   id="password"
                                   className="form_input"
                                   ref='password'
                                   required
                                   placeholder="Password"
                                   value={this.props.password}
                                   onChange={this.onChangePassword}
                            />
                            <span className="password_visibility_icon"
                                  onClick={this.showPassword}>
                                <img src={this.state.eye_icon ? eye_icon_invisible : eye_icon} alt="eye_icon"/>
                            </span>
                        </div>
                    </div>
                </form>
                <p className='about_text'>By registering an account with us you agree to the PP and T&C</p>
                <Link to="/registration/step4">
                    <button type='button'
                            className='submit_button'
                            onClick={this.onChangeStep}
                    >
                        Create account
                    </button>
                </Link>
                <p className='sign_in_text'>Have an account? <Link to='/login'>Sign In</Link></p>
            </div>
        );
    }
}

export default CreateAccount;
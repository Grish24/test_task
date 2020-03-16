import React, {Component} from 'react';
import './CreateAccount.scss'
import {Link} from "react-router-dom";
import google_icon from '../../assets/images/google_icon.svg';
import eye_icon from '../../assets/images/password_visibility_icon.svg';

class CreateAccount extends Component {

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

    };
    onChangeStep = () => {
        document.getElementById('step3').checked = true;
        // this.props.setStep(true);
    };
    render() {
        return (
            <div className='create_account'>
                <h3>Create your account</h3>
                <button className='google_sign_up'>
                    <img src={google_icon} alt=""/>
                    Sign Up with Google
                </button>
                <div className='splitter'>
                    <span>or</span>
                </div>
                <form className='registration_form'>
                    <div className="form_group">
                        <div className='form_group_name'>
                            <input type="text" className="form_input" id="first_name" placeholder="First name" value={this.props.name} required="" onChange={this.onChangeFirstName} />
                            <input type="text" className="form_input" id="last_name" placeholder="Last name" value={this.props.last_name} required="" onChange={this.onChangeLastName} />
                        </div>
                    </div>
                    <div className="form_group">
                        <input type="email" className="form_input" id="email" placeholder="Email" required="" value={this.props.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className='form_wrapper'>
                        <div className="form_group">
                            <input type="password" className="form_input" id="password" ref='password' placeholder="Password" value={this.props.password} required="" onChange={this.onChangePassword} />
                            <span className="password_visibility_icon" onClick={this.showPassword}><img src={eye_icon} alt=""/></span>
                        </div>
                    </div>
                </form>
                <p className='about_text'>By registering an account with us you agree to the PP and T&C</p>
                <Link to="/step4">
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
import React, {Component} from 'react';
import google_icon from "../../assets/images/google_icon.svg";
import {Link} from "react-router-dom";
import {Route, Switch,Redirect} from 'react-router-dom'


class Login extends Component {
    onChangeEmail = (event) => {
        this.props.setEmail(event.target.value);
    };
    onChangePassword = (event) => {
        this.props.setPassword(event.target.value);
    };
    login = () => {
        if (this.props.store.createAccount.email === this.props.email && this.props.store.createAccount.password === this.props.password) {

        } else {
            alert('no')
        }
    };
    render() {
        console.log(this.props)
        return (
            <div className='sign_in_account create_account'>
                <h3>Sign in to your account</h3>
                <button className='google_sign_up'>
                    <img src={google_icon} alt=""/>
                    Sign in with Google
                </button>
                <div className='splitter'>
                    <span>or</span>
                </div>
                <form className='registration_form'>

                    <div className="form_group">
                        <input type="text" className="form_input" id="email" placeholder="Email" value={this.props.email} required="" onChange={this.onChangeEmail} />
                    </div>
                    <div className='form_wrapper'>
                        <div className="form_group">
                            <input type="text" className="form_input" id="password" placeholder="Password" value={this.props.password} required="" onChange={this.onChangePassword} />
                        </div>
                        <span className=""></span>
                    </div>
                </form>
                <button type='button'
                        className='submit_button'
                        onClick={this.login}
                >
                    Sign In
                </button>
                <p className='sign_in_text'>Don՞t have an account? <a href="">Sign Up</a></p>
                <p className='sign_in_text'><a href="">Forgot password?</a></p>
            </div>
        );
    }
}

export default Login;
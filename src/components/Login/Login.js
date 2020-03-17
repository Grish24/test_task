import React, {Component} from 'react';
import google_icon from "../../assets/images/google_icon.svg";
import {Link} from "react-router-dom";
import '../CreateAccount/CreateAccount.scss'
import logo from '../../assets/images/hoory_logo.svg'
import eye_icon from "../../assets/images/eye_icon.svg";
import eye_icon_invisible from "../../assets/images/eye_icon_invisible.svg";

class Login extends Component {
    state={
        eye_icon:false
    };
    onChangeEmail = (event) => {
        this.props.setEmail(event.target.value);
    };
    onChangePassword = (event) => {
        this.props.setPassword(event.target.value);
    };
    showPassword = () => {
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
    login = () => {
        if (this.props.store.createAccount.email === this.props.email && this.props.store.createAccount.password === this.props.password) {
                this.props.history.push('/welcome')
        } else {
            alert('wrong login or password')
        }
    };

    render() {
        console.log(this.props);
        return (
            <div className='sign_in_account create_account'>
                <div className='logo'>
                    <img src={logo} alt=""/>
                </div>
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
                        <input type="text"
                               className="form_input"
                               placeholder="Email"
                               value={this.props.email}
                               onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className='form_wrapper'>
                        <div className="form_group">
                            <input type="password"
                                   className="form_input"
                                   ref='password'
                                   placeholder="Password"
                                   value={this.props.password}
                                   onChange={this.onChangePassword}
                            />
                            <span className="password_visibility_icon"
                                  onClick={this.showPassword}
                            >
                                <img src={this.state.eye_icon ? eye_icon_invisible : eye_icon} alt=""/>
                            </span>
                        </div>
                    </div>
                </form>
                <button type='button'
                        className='submit_button'
                        onKeyPress={this.login}
                        onClick={this.login}
                >
                    Sign In
                </button>
                <p className='sign_in_text'>Don՞t have an account? <Link to='/registration/step1'>Sign Up</Link></p>
                <p className='sign_in_text'><a href="">Forgot password?</a></p>
            </div>
        );
    }
}

export default Login;
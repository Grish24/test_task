import React, {Component} from 'react';
import './CreateDone.scss'
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/images/hooryLogo/hoory_grey.svg'

class CreateDone extends Component {
    render() {
        return (
            <div className='container_done'>
                <div className='logo'>
                    <Logo/>
                </div>
                <h3>Fantastico <span aria-labelledby='greeting' role='img'>&#x1F389;</span> </h3>

                <p className='done_text'>
                    You have successfully setup the Hoory widget on your website! <br/>
                    Proceed to Admin Dashboard to start training {this.props.name ? this.props.name : '%name%'}
                </p>
                <Link to="/login">
                    <button type='button'
                            className='submit_button'
                    >
                        Go to Admin Dashboard
                    </button>
                </Link>
            </div>
        );
    }
}

export default CreateDone;
import React, {Component} from 'react';
import './CreateDone.scss'
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/images/hoory_grey.svg'

class CreateDone extends Component {
    render() {
        return (
            <div className='container_done'>
                <div className='logo'>
                    <Logo/>
                </div>
                <h3>Fantastico &#x1F389; </h3>

                <p className='done_text'>
                    You have successfully setup the Hoory widget on your website! <br/>
                    Proceed to Admin Dashboard to start training %name%
                </p>

                <button type='button'
                        className='submit_button'
                >
                    <Link to="/login">Go to Admin Dashboard</Link>
                </button>
            </div>
        );
    }
}

export default CreateDone;
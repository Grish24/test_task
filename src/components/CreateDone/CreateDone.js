import React, {Component} from 'react';
import './CreateDone.scss'
import {Link} from "react-router-dom";

class CreateDone extends Component {
    render() {
        return (
            <div className='container_done'>
                <img src="" alt=""/>
                <h3>Fantastico</h3>

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
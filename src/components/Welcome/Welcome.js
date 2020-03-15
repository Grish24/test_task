import React, {Component} from 'react';
import './Welcome.scss'
import logout from '../../assets/images/logout.svg'

class Welcome extends Component {
    render() {
        return (
            <div className='welcome_container'>
                <div className='logout_wrapper'>
                    <button className='logout_button'>
                        Logout
                        <img src={logout} alt=""/>
                    </button>
                </div>
            </div>
        );
    }
}

export default Welcome;
import React, {Component} from 'react';
import './Welcome.scss'
import logout from '../../assets/images/logout.svg'
import {Link} from 'react-router-dom'


const path = '../../assets/images/hooryIcons/';

class Welcome extends Component {
    images = {
      'one': `${path+'female-1.svg'}`,
      'two': `${path+'female-2.svg'}`,
      'three': `${path+'female-3.svg'}`,
      'four': `${path+'female-4.svg'}`,
      'five': `${path+'female-5.svg'}`,
      'six': `${path+'female-6.svg'}`,
      'seven': `${path+'female-7.svg'}`,
    };
    render() {
        return (
            <div className='welcome_container'>
                <div className='logout_wrapper'>
                    <Link to='/login'>
                        <button className='logout_button'>
                            Logout
                            <img src={logout} alt=""/>
                        </button>
                    </Link>
                </div>
                <div className='welcome_wrapper'>
                    <div className='welcome_block'>
                        <div className='hoory_logo'>
                            <img src={this.images[this.props.color]} alt=""/>
                        </div>
                        <h2 className='title'>hoory</h2>
                        <h3>
                            {this.props.store.createAccount.first_name ? this.props.store.createAccount.first_name : 'Name'} {this.props.store.createAccount.last_name ? this.props.store.createAccount.last_name : 'Surname'}
                        </h3>
                        <h4>
                            {this.props.store.createAccount.email ? this.props.store.createAccount.email : 'yourmail@hoory.com'}
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;
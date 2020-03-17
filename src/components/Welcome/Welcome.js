import React, {Component} from 'react';
import './Welcome.scss'
import logout from '../../assets/images/logout.svg'
import {Link} from 'react-router-dom'


class Welcome extends Component {

    render() {
        console.log(this.props);
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
                            <img src={this.props.imagePath} alt=""/>
                        </div>
                        <h2 className='title'>
                            {this.props.store.createName.name ? this.props.store.createName.name : 'hoory'}
                        </h2>
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
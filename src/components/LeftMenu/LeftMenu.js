import React, {Component} from 'react';
import './LeftMenu.scss'
import logo from '../../assets/images/hooryLogo/hoory_logo_white.png'


class LeftMenu extends Component {

    render() {

        return (
            <div className='left_menu'>
                <img src={logo} alt=""/>
                <div className='splitter'></div>
                <div>
                    <div className='custom_checkbox'>
                        <input id="step1"
                               className="inp-cbx"
                               type="checkbox"
                               disabled
                               checked={this.props.store.createName.step_first}
                               />
                        <label className="cbx"
                               htmlFor="step1">
                            <span>
                                <svg width="9px" height="7px" viewBox="0 0 12 9">
                                    <polyline points="1 5 4 8 11 1"></polyline>
                                </svg>
                            </span>
                            <span>Name your assistant</span>
                        </label>
                    </div>
                    <div className='custom_checkbox'>
                        <input id="step2"
                               className="inp-cbx"
                               type="checkbox"
                               disabled
                               checked={this.props.store.createStyle.step_second}
                        />
                        <label className="cbx"
                               htmlFor="step2">
                            <span>
                                <svg width="9px" height="7px" viewBox="0 0 12 9">
                                    <polyline points="1 5 4 8 11 1"></polyline>
                                </svg>
                            </span>
                            <span>Select styles</span>
                        </label>
                    </div>
                    <div className='custom_checkbox'>
                        <input id="step3"
                               className="inp-cbx"
                               type="checkbox"
                               disabled
                               checked={this.props.store.createAccount.step_third}
                        />
                        <label className="cbx"
                               htmlFor="step3">
                            <span>
                                <svg width="9px" height="7px" viewBox="0 0 12 9">
                                    <polyline points="1 5 4 8 11 1"></polyline>
                                </svg>
                            </span>
                            <span>Create your account</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftMenu;
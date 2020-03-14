import React, {Component} from 'react';
import './LeftMenu.scss'



class LeftMenu extends Component {
    render() {
        return (
            <div className='left_menu'>
                <div className='logo'>
                    <img src="" alt=""/>
                    <h2>hoory</h2>
                </div>
                <div className='splitter'></div>
                <div>
                    <div className='custom_checkbox'>
                        <input className="inp-cbx" id="step1" type="checkbox"/>
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
                        <input className="inp-cbx" id="step2" type="checkbox"/>
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
                        <input className="inp-cbx" id="step3" type="checkbox"/>
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
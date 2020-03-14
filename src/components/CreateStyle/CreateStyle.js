import React, {Component} from 'react';
import './CreateStyle.scss'
import {Link} from "react-router-dom";

class CreateStyle extends Component {
    onChangeGender = (event) => {

    };
    onChangeColor = () => {

    };
    render() {
        console.log(this.props.name);
        return (
            <div className='create_style'>
                <h3>Select {this.props.name}'s icon</h3>
                <div>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
                <h3>Select color scheme</h3>
                <div>

                </div>
                <button type='button'
                        className='submit_button'
                >
                    <Link to="/step3">Next</Link>
                </button>
            </div>
        );
    }
}

export default CreateStyle;
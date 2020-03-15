import React, {Component} from 'react';
import './CreateStyle.scss'
import {Link} from "react-router-dom";
import { ReactComponent as FemaleIcon } from '../../assets/images/female-1.svg'
import { ReactComponent as MaleIcon } from '../../assets/images/male-1.svg';


class CreateStyle extends Component {
    onChangeGender = (event) => {
       console.log(event.target)
    };
    onChangeColor = (event) => {

    };
    onChangeStep = () =>{
        document.getElementById('step2').checked = true;
    };
    render() {
        console.log(this.props.name);
        return (
            <div className='create_style'>
                <h3>Select {this.props.name ? this.props.name : "<name>"}'s icon</h3>
                <div className='gender_icons'>
                    <div data-txt="female" onClick={this.onChangeGender}>
                        <FemaleIcon id='female'/>
                    </div>
                    <div data-txt="male" onClick={this.onChangeGender}>
                        <MaleIcon />
                    </div>
                </div>
                <h3>Select color scheme</h3>
                <div className='color_icons'>
                    <div onClick={this.onChangeColor} className='color_one'></div>
                    <div onClick={this.onChangeColor} className='color_two'></div>
                    <div onClick={this.onChangeColor} className='color_tree'></div>
                    <div onClick={this.onChangeColor} className='color_for'></div>
                    <div onClick={this.onChangeColor} className='color_five'></div>
                    <div onClick={this.onChangeColor} className='color_six'></div>
                    <div onClick={this.onChangeColor} className='color_seven'></div>
                </div>
                <Link to="/step3">
                    <button type='button'
                            className='submit_button'
                            onClick={this.onChangeStep}
                    >
                        Next
                    </button>
                </Link>
            </div>
        );
    }
}

export default CreateStyle;
import React, {Component, useState} from 'react';
import './CreateStyle.scss'
import {Link} from "react-router-dom";

import {ReactComponent as female1} from '../../assets/images/hooryIcons/female-1.svg';
import {ReactComponent as female2} from '../../assets/images/hooryIcons/female-2.svg';
import {ReactComponent as female3} from '../../assets/images/hooryIcons/female-3.svg';
import {ReactComponent as female4} from '../../assets/images/hooryIcons/female-4.svg';
import {ReactComponent as female5} from '../../assets/images/hooryIcons/female-5.svg';
import {ReactComponent as female6} from '../../assets/images/hooryIcons/female-6.svg';
import {ReactComponent as female7} from '../../assets/images/hooryIcons/female-7.svg';
import {ReactComponent as female_selected_1} from '../../assets/images/hooryIcons/female-selected-1.svg';
import {ReactComponent as female_selected_2} from '../../assets/images/hooryIcons/female-selected-2.svg';
import {ReactComponent as female_selected_3} from '../../assets/images/hooryIcons/female-selected-3.svg';
import {ReactComponent as female_selected_4} from '../../assets/images/hooryIcons/female-selected-4.svg';
import {ReactComponent as female_selected_5} from '../../assets/images/hooryIcons/female-selected-5.svg';
import {ReactComponent as female_selected_6} from '../../assets/images/hooryIcons/female-selected-6.svg';
import {ReactComponent as female_selected_7} from '../../assets/images/hooryIcons/female-selected-7.svg';

import {ReactComponent as male1} from '../../assets/images/hooryIcons/male-1.svg';
import {ReactComponent as male2} from '../../assets/images/hooryIcons/male-2.svg';
import {ReactComponent as male3} from '../../assets/images/hooryIcons/male-3.svg';
import {ReactComponent as male4} from '../../assets/images/hooryIcons/male-4.svg';
import {ReactComponent as male5} from '../../assets/images/hooryIcons/male-5.svg';
import {ReactComponent as male6} from '../../assets/images/hooryIcons/male-6.svg';
import {ReactComponent as male7} from '../../assets/images/hooryIcons/male-7.svg';
import {ReactComponent as male_selected_1} from '../../assets/images/hooryIcons/male-selected-1.svg';
import {ReactComponent as male_selected_2} from '../../assets/images/hooryIcons/male-selected-2.svg';
import {ReactComponent as male_selected_3} from '../../assets/images/hooryIcons/male-selected-3.svg';
import {ReactComponent as male_selected_4} from '../../assets/images/hooryIcons/male-selected-4.svg';
import {ReactComponent as male_selected_5} from '../../assets/images/hooryIcons/male-selected-5.svg';
import {ReactComponent as male_selected_6} from '../../assets/images/hooryIcons/male-selected-6.svg';
import {ReactComponent as male_selected_7} from '../../assets/images/hooryIcons/male-selected-7.svg';



const GenderIconComponent = ({color}) => {

    const [selected, setSelected] = useState(true);
    const [selected2, setSelected2] = useState(false);

    const mapping = {
        'one': female1,
        'two': female2,
        'three': female3,
        'four': female4,
        'five': female5,
        'six': female6,
        'seven': female7,
    };
    const mapping_selected = {
        'one': female_selected_1,
        'two': female_selected_2,
        'three': female_selected_3,
        'four': female_selected_4,
        'five': female_selected_5,
        'six': female_selected_6,
        'seven': female_selected_7,
    };
    const mapping_male = {
        'one': male1,
        'two': male2,
        'three': male3,
        'four': male4,
        'five': male5,
        'six': male6,
        'seven': male7,
    };
    const mapping_selected_male = {
        'one': male_selected_1,
        'two': male_selected_2,
        'three': male_selected_3,
        'four': male_selected_4,
        'five': male_selected_5,
        'six': male_selected_6,
        'seven': male_selected_7,
    };
    const Female = (selected   ? mapping_selected : mapping)[color];
    const Male = (selected2  ? mapping_selected_male : mapping_male)[color];

    const handleOnClick = () => {
        setSelected(!selected);
        setSelected2(!selected2)
    };

    return (
        <div className='gender_icons'>
           <Female onClick={handleOnClick}/>
           <Male onClick={handleOnClick}/>
        </div>
    )
};


class CreateStyle extends Component {

    state={
        color:'one',
    };

    // onChangeGender = (event) => {
    //    console.log(event.target)
    // };
    onChangeColor = (color) => {
        this.setState({
           color
        });
        this.props.setCreateColor(this.state.color);
    };
    onChangeStep = () =>{
        this.props.setStep(true);
    };
    render() {
        console.log(this)
        return (
            <div className='create_style'>
                <h3>Select {this.props.name ? this.props.name : "<name>"}'s icon</h3>
                <GenderIconComponent color={this.state.color} gender={this.state.gender}/>
                <h3>Select color scheme</h3>
                <div className='color_icons'>
                    <div className={this.state.color === 'one' ? 'color_border' : ''} onClick={() => this.onChangeColor('one')}>
                        <div className='color_one'> </div>
                    </div>
                    <div className={this.state.color === 'two' ? 'color_border' : ''} onClick={() => this.onChangeColor('two')}>
                        <div  className='color_two'> </div>
                    </div>
                    <div className={this.state.color === 'three' ? 'color_border' : ''} onClick={() => this.onChangeColor('three')}>
                        <div  className='color_three'> </div>
                    </div>
                    <div className={this.state.color === 'four' ? 'color_border' : ''} onClick={() => this.onChangeColor('four')}>
                        <div  className='color_four'> </div>
                    </div>
                    <div className={this.state.color === 'five' ? 'color_border' : ''} onClick={() => this.onChangeColor('five')}>
                        <div  className='color_five'> </div>
                    </div>
                    <div className={this.state.color === 'six' ? 'color_border' : ''} onClick={() => this.onChangeColor('six')}>
                        <div  className='color_six'> </div>
                    </div>
                    <div className={this.state.color === 'seven' ? 'color_border' : ''} onClick={() => this.onChangeColor('seven')}>
                        <div  className='color_seven'> </div>
                    </div>
                </div>
                <Link to="/registration/step3">
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
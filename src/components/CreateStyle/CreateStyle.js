import React, {Component, useState} from 'react';
import './CreateStyle.scss'
import {Link} from "react-router-dom";
//
// import {ReactComponent as female1} from '../../assets/images/hooryIcons/female-1.svg';
// import {ReactComponent as female2} from '../../assets/images/hooryIcons/female-2.svg';
// import {ReactComponent as female3} from '../../assets/images/hooryIcons/female-3.svg';
// import {ReactComponent as female4} from '../../assets/images/hooryIcons/female-4.svg';
// import {ReactComponent as female5} from '../../assets/images/hooryIcons/female-5.svg';
// import {ReactComponent as female6} from '../../assets/images/hooryIcons/female-6.svg';
// import {ReactComponent as female7} from '../../assets/images/hooryIcons/female-7.svg';
// import {ReactComponent as female_selected_1} from '../../assets/images/hooryIcons/female-selected-1.svg';
// import {ReactComponent as female_selected_2} from '../../assets/images/hooryIcons/female-selected-2.svg';
// import {ReactComponent as female_selected_3} from '../../assets/images/hooryIcons/female-selected-3.svg';
// import {ReactComponent as female_selected_4} from '../../assets/images/hooryIcons/female-selected-4.svg';
// import {ReactComponent as female_selected_5} from '../../assets/images/hooryIcons/female-selected-5.svg';
// import {ReactComponent as female_selected_6} from '../../assets/images/hooryIcons/female-selected-6.svg';
// import {ReactComponent as female_selected_7} from '../../assets/images/hooryIcons/female-selected-7.svg';
//
// import {ReactComponent as male1} from '../../assets/images/hooryIcons/male-1.svg';
// import {ReactComponent as male2} from '../../assets/images/hooryIcons/male-2.svg';
// import {ReactComponent as male3} from '../../assets/images/hooryIcons/male-3.svg';
// import {ReactComponent as male4} from '../../assets/images/hooryIcons/male-4.svg';
// import {ReactComponent as male5} from '../../assets/images/hooryIcons/male-5.svg';
// import {ReactComponent as male6} from '../../assets/images/hooryIcons/male-6.svg';
// import {ReactComponent as male7} from '../../assets/images/hooryIcons/male-7.svg';
// import {ReactComponent as male_selected_1} from '../../assets/images/hooryIcons/male-selected-1.svg';
// import {ReactComponent as male_selected_2} from '../../assets/images/hooryIcons/male-selected-2.svg';
// import {ReactComponent as male_selected_3} from '../../assets/images/hooryIcons/male-selected-3.svg';
// import {ReactComponent as male_selected_4} from '../../assets/images/hooryIcons/male-selected-4.svg';
// import {ReactComponent as male_selected_5} from '../../assets/images/hooryIcons/male-selected-5.svg';
// import {ReactComponent as male_selected_6} from '../../assets/images/hooryIcons/male-selected-6.svg';
// import {ReactComponent as male_selected_7} from '../../assets/images/hooryIcons/male-selected-7.svg';

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../../assets/images/hooryIcons/', false, /\.(png|jpe?g|svg)$/));

const GenderIconComponent = ({color,setImagePath}) => {
    const [selected, setSelected] = useState(true);
    const [selected_male, setSelected_male] = useState(false);

    const mapping = {
        1: images[0],
        2: images[1],
        3: images[2],
        4: images[3],
        5: images[4],
        6: images[5],
        7: images[6],
    };
    const mapping_selected = {
        1: images[7],
        2: images[8],
        3: images[9],
        4: images[10],
        5: images[11],
        6: images[12],
        7: images[13],
    };
    const mapping_male = {
        1: images[14],
        2: images[15],
        3: images[16],
        4: images[17],
        5: images[18],
        6: images[19],
        7: images[20],
    };
    const mapping_selected_male = {
        1: images[21],
        2: images[22],
        3: images[23],
        4: images[24],
        5: images[25],
        6: images[26],
        7: images[27],
    };

    const female = (selected   ? mapping_selected : mapping)[color];
    const male = (selected_male  ? mapping_selected_male : mapping_male)[color];

    const handleOnClick = () => {
        setSelected(true);
        setSelected_male(false);
        console.log(mapping[color]);
        setImagePath(mapping[color]);
    };
    const handleOnClickMale = () => {
        setSelected(false);
        setSelected_male(true);
        setImagePath(mapping_male[color]);
    };
    return (
        <div className='gender_icons'>
           <img src={female} alt='' onClick={handleOnClick}/>
           <img src={male} alt='' onClick={handleOnClickMale}/>
        </div>
    )
};


class CreateStyle extends Component {

    state={
        color:1,
    };
    onChangeColor = (color) => {
        this.setState({
           color
        });
    };
    onChangeStep = () =>{
        this.props.setStep(true);
    };
    render() {
        return (
            <div className='create_style'>
                <h3>Select {this.props.name ? this.props.name : "<name>"}'s icon</h3>
                <GenderIconComponent color={this.state.color}
                                     setImagePath={this.props.setImagePath}
                />
                <h3>Select color scheme</h3>
                <div className='color_icons'>
                    <div className={this.state.color === 1 ? 'color_border' : ''} onClick={() => this.onChangeColor(1)}>
                        <div className='color_one'> </div>
                    </div>
                    <div className={this.state.color === 2 ? 'color_border' : ''} onClick={() => this.onChangeColor(2)}>
                        <div  className='color_two'> </div>
                    </div>
                    <div className={this.state.color === 3 ? 'color_border' : ''} onClick={() => this.onChangeColor(3)}>
                        <div  className='color_three'> </div>
                    </div>
                    <div className={this.state.color === 4 ? 'color_border' : ''} onClick={() => this.onChangeColor(4)}>
                        <div  className='color_four'> </div>
                    </div>
                    <div className={this.state.color === 5 ? 'color_border' : ''} onClick={() => this.onChangeColor(5)}>
                        <div  className='color_five'> </div>
                    </div>
                    <div className={this.state.color === 6 ? 'color_border' : ''} onClick={() => this.onChangeColor(6)}>
                        <div  className='color_six'> </div>
                    </div>
                    <div className={this.state.color === 7 ? 'color_border' : ''} onClick={() => this.onChangeColor(7)}>
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
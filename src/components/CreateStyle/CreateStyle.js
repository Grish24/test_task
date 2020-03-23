import React, {Component, useState, useEffect} from 'react';
import './CreateStyle.scss'
import {Link} from "react-router-dom";
import {importAll} from '../../importAll';

const femaleImages = importAll(require.context('../../assets/images/hooryIcons/female/unselected', false, /\.(png|jpe?g|svg)$/));
const femaleImagesSelected = importAll(require.context('../../assets/images/hooryIcons/female/selected', false, /\.(png|jpe?g|svg)$/));
const maleImages = importAll(require.context('../../assets/images/hooryIcons/male/unselected', false, /\.(png|jpe?g|svg)$/));
const maleImagesSelected = importAll(require.context('../../assets/images/hooryIcons/male/selected', false, /\.(png|jpe?g|svg)$/));

const GenderIconComponent = ({color, setImagePath}) => {
    const [selected, setSelected] = useState(true);
    const [selectedMale, setSelectedMale] = useState(false);

    useEffect(() => {
        selected ? setImagePath(femaleArray[color]) : setImagePath(maleArray[color]);
    });

    const femaleArray = {
        1: femaleImages[0],
        2: femaleImages[1],
        3: femaleImages[2],
        4: femaleImages[3],
        5: femaleImages[4],
        6: femaleImages[5],
        7: femaleImages[6],
    };
    const femaleArraySelected = {
        1: femaleImagesSelected[0],
        2: femaleImagesSelected[1],
        3: femaleImagesSelected[2],
        4: femaleImagesSelected[3],
        5: femaleImagesSelected[4],
        6: femaleImagesSelected[5],
        7: femaleImagesSelected[6],
    };
    const maleArray = {
        1: maleImages[0],
        2: maleImages[1],
        3: maleImages[2],
        4: maleImages[3],
        5: maleImages[4],
        6: maleImages[5],
        7: maleImages[6],
    };
    const maleArraySelected = {
        1: maleImagesSelected[0],
        2: maleImagesSelected[1],
        3: maleImagesSelected[2],
        4: maleImagesSelected[3],
        5: maleImagesSelected[4],
        6: maleImagesSelected[5],
        7: maleImagesSelected[6],
    };

    const female = (selected ? femaleArraySelected : femaleArray)[color];
    const male = (selectedMale ? maleArraySelected : maleArray)[color];

    const handleOnClick = () => {
        setSelected(true);
        setSelectedMale(false);
    };
    const handleOnClickMale = () => {
        setSelected(false);
        setSelectedMale(true);
    };
    return (
        <div className='gender_icons'>
            <img src={female} alt='femaleIcon' onClick={handleOnClick}/>
            <img src={male} alt='maleIcon' onClick={handleOnClickMale}/>
        </div>
    )
};


class CreateStyle extends Component {

    state = {
        color: 1,
    };
    onChangeColor = (color) => {
        this.setState({
            color
        });
    };
    onChangeStep = () => {
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
                        <div className='color_one'></div>
                    </div>
                    <div className={this.state.color === 2 ? 'color_border' : ''} onClick={() => this.onChangeColor(2)}>
                        <div className='color_two'></div>
                    </div>
                    <div className={this.state.color === 3 ? 'color_border' : ''} onClick={() => this.onChangeColor(3)}>
                        <div className='color_three'></div>
                    </div>
                    <div className={this.state.color === 4 ? 'color_border' : ''} onClick={() => this.onChangeColor(4)}>
                        <div className='color_four'></div>
                    </div>
                    <div className={this.state.color === 5 ? 'color_border' : ''} onClick={() => this.onChangeColor(5)}>
                        <div className='color_five'></div>
                    </div>
                    <div className={this.state.color === 6 ? 'color_border' : ''} onClick={() => this.onChangeColor(6)}>
                        <div className='color_six'></div>
                    </div>
                    <div className={this.state.color === 7 ? 'color_border' : ''} onClick={() => this.onChangeColor(7)}>
                        <div className='color_seven'></div>
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
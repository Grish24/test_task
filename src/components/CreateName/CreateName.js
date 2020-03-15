import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './CreateName.scss'
import {ReactComponent as Logo} from '../../assets/images/hoory_grey.svg'

class CreateName extends Component {
    onChangeName = (event) => {
        this.props.setCreateName(event.target.value)
    };
    onChangeStep = () => {
        document.getElementById('step1').checked = true;
        // this.props.setStep(true);
    };

    render() {
        return (
            <div>
                <div className='hoory_logo'>
                    <Logo/>
                </div>
                <h2 className='title'>hoory</h2>
                <div className="form_group">
                    <label htmlFor="name" className="form_label">Name your assistant</label>
                    <input type="text" className="form_input" id="name" placeholder="Hoory" required=""
                           onChange={this.onChangeName}/>
                </div>
                <Link to="/step2">
                    <button type='button'
                            className='submit_button'
                            onClick={this.onChangeStep}
                    >
                        Start
                    </button>
                </Link>

            </div>
        );
    }
}

export default CreateName;
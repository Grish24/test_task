import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './CreateName.scss'

class CreateName extends Component {
    onChangeName = (event) => {
        this.props.setCreateName(event.target.value)
    };
    onChangeStep = () => {
      this.props.setStep(true);
    };

    render() {
        return (
            <div>
                <img src="" alt=""/>
                <h2 className='title'>hoory</h2>
                <div className="form_group">
                    <label htmlFor="name" className="form_label">Name your assistant</label>
                    <input type="text" className="form_input" id="name" placeholder="Hoory" required="" onChange={this.onChangeName} />
                </div>

                <button type='button'
                        className='submit_button'
                        onClick={this.onChangeStep}
                >
                    <Link to="/step2">Start</Link>
                </button>


            </div>
        );
    }
}

export default CreateName;
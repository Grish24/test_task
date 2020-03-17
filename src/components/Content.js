import React, {Component} from 'react';
import './Content.scss'
import CreateNameContainer from "./CreateName/CreateNameContainer";
import CreateStyleContainer from "./CreateStyle/CreateStyleContainer";
import CreateAccountContainer from "./CreateAccount/CreateAccountContainer";
import CreateDoneContainer from "./CreateDone/CreateDoneContainer";

import {Route, Switch,Redirect} from 'react-router-dom'

class Content extends Component {
    render() {
        return (
            <section className='main_content'>
                <div className='content_center'>
                    <Switch>
                        <Route  path="/registration/step1" component={CreateNameContainer}/>
                        <Route  path="/registration/step2" component={CreateStyleContainer}/>
                        <Route  path="/registration/step3" component={CreateAccountContainer}/>
                        <Route  path="/registration/step4" component={CreateDoneContainer}/>
                        <Redirect to='/registration/step1'/>
                    </Switch>
                </div>
            </section>
        );
    }
}

export default Content;
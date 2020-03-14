import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Route, Switch,Redirect} from 'react-router-dom'
import LoginContainer from "./components/Login/LoginContainer";
import Registration from "./components/Registration/Registration";
import WelcomeContainer from "./components/Welcome/WelcomeContainer";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <section className='main_section'>
                    <Switch>
                        <Route path="/login" component={LoginContainer}/>
                        <Route component={Registration}/>
                        <Route path='/welcome' component={WelcomeContainer}/>
                        <Redirect to='/welcome'/>
                    </Switch>
                </section>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = state => {
    return {
        step:state.createName.step_first
    }
};


export default connect(mapStateToProps)(App);

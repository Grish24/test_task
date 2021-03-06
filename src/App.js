import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
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
                        <Route exact path="/login" render={(props) => <LoginContainer {...props} />}/>
                        <Route path='/welcome' component={WelcomeContainer}/>
                        <Route path='/registration' component={Registration}/>
                        <Redirect to='/registration'/>
                    </Switch>
                </section>
            </BrowserRouter>
        );
    }
}



export default App;

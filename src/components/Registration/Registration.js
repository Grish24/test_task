import React, {Component} from 'react';
import LeftMenuContainer from "../LeftMenu/LeftMenuContainer";
import Content from "../Content";
import {BrowserRouter} from "react-router-dom";

class Registration extends Component {
    render() {
        return (
            <>
                <LeftMenuContainer/>
                <Content/>
            </>
        );
    }
}

export default Registration;
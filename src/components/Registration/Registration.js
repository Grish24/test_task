import React, {Component} from 'react';
import LeftMenu from "../LeftMenu";
import Content from "../Content";
import {BrowserRouter} from "react-router-dom";

class Registration extends Component {
    render() {
        return (
            <>
                <LeftMenu/>
                <Content/>
            </>
        );
    }
}

export default Registration;
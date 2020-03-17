import React, {Component} from 'react';
import {connect} from 'react-redux'
import LeftMenu from "./LeftMenu";

class LeftMenuContainer extends Component {
    render() {
        return (
            <LeftMenu store={this.props.store} />
        );
    }
}
const mapStateToProps = state => {
    return {
        store:state,
    }
};

export default connect(mapStateToProps,null)(LeftMenuContainer);
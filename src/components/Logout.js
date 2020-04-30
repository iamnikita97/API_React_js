import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    LOGOUT
} from '../actions/action_index'

class Logout extends Component {

    componentDidMount() {
        const { localStorage } = window;
        localStorage.clear();
        this.props.logout()
    }

    render() {
        const { access_token } = this.props;

        return (
            access_token
                ?
                <div></div>
                :
                <Redirect to='/' />
        );

    }

}
const mapStateToProps = (state) => ({
    access_token: state.user.loggedInUserData.token,
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch({
        type: LOGOUT
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
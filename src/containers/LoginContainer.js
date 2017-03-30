/**
 * Created by cw on 2017/3/30.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginCreators from '../actions/login';
import Login from '../page/Login';

class LoginContainer extends Component{
    render(){
        return(
            <Login {...this.props}/>
        )
    }
}

const mapStateToProps = (state)=>{
    const {login} = state;
    return {
        login
    };
};

const mapDispatchToProps = (dispatch)=> {
    const loginActions = bindActionCreators(loginCreators, dispatch);
    return {
        loginActions
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
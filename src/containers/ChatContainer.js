/**
 * Created by eengoo on 17/3/14.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ChatCreators from '../actions/chat';
import Chat from '../page/Chat';

class ChatContainer extends Component{

    render(){
        return(
            <Chat {...this.props}/>
        );
    }
}

const mapStateToProps = (state) =>{
    const {chat} = state;
    return {
        chat
    };
};

const mapDispatchToProps = (dispatch) =>{
    const {chatActions} = bindActionCreators(ChatCreators, dispatch);
    return {
        chatActions
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
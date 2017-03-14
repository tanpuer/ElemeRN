/**
 * Created by eengoo on 17/3/14.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as friendsCreators from '../actions/friends';
import Friends from '../page/Friends';

class FriendContainer extends Component{

    render(){
        return(
            <Friends {...this.props}/>
        );
    }
}

const mapStateToProps = (state)=>{
    const {friends} = state;
    return {
        friends
    };
};

const mapDispatchToProps = (dispatch)=> {
    const friendsActions = bindActionCreators(friendsCreators, dispatch);
    return {
        friendsActions
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendContainer);
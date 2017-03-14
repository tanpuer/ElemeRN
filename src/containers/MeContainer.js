/**
 * Created by eengoo on 17/3/14.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as MeCreators from '../actions/me';
import Me from '../page/Me';

class MeContainer extends Component{

    render(){
        return(
            <Me {...this.props}/>
        );
    }
}

const mapStateToProps = (state) =>{
    const {me} = state;
    return {
        me
    };
};

const mapDispatchToProps = (dispatch)=> {
    const {meActions} = bindActionCreators(MeCreators, dispatch);
    return {
        meActions
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MeContainer);
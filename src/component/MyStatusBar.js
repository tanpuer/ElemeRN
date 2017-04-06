/**
 * Created by eengoo on 17/3/14.
 */
import React, {Component} from 'react';
import {
    StatusBar,
    Platform,
    View,
} from 'react-native';
import * as colors from '../constants/ColorTypes';


//ios don't have a concept of statusbar background

export default class MyStatusBar extends Component{
    render(){
        if (Platform.OS === 'android'){
            return <StatusBar {...this.props}/>
        }else {
            return (
                <View style={{height:this.props.height, backgroundColor:this.props.backgroundColor}}
                >
                    <StatusBar {...this.props}/>
                </View>
            );
        }
    }
}

MyStatusBar.defaultProps = {
    height:20,
    backgroundColor:colors.MAIN_COLOR,
};
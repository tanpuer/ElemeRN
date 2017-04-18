/**
 * Created by eengoo on 17/3/14.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import MyFlatList from '../component/MyFlatList';

export default class Friends extends Component{

    render(){
        return(
            <MyFlatList {...this.props}/>
        );
    }
}
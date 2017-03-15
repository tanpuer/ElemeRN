/**
 * Created by eengoo on 17/3/14.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    DeviceEventEmitter,
    Modal,
    TouchableHighlight
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import MyScrollableTabBar from '../component/MyScrollableTabBar';

export default class News extends Component{

    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
        }
    }

    showModal(){
        this.props.newsActions.showOrHideNewsModal(false);
    }

    render() {
        return(
            <ScrollableTabView
                style={{flex:1}}
                initialPage={0}
                renderTabBar={() => <MyScrollableTabBar showModal={()=>{}}/>}
            >
                <Text tabLabel='Tab #1'>My</Text>
                <Text tabLabel='Tab #2'>favorite</Text>
                <Text tabLabel='Tab #3'>project</Text>
                <Text tabLabel='Tab #4'>favorite</Text>
                <Text tabLabel='Tab #5'>project</Text>
            </ScrollableTabView>
        );
    }
}
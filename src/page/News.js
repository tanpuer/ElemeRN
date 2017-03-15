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
import * as colors from '../constants/ColorTypes';

export default class News extends Component{

    render() {
        return (
            <View style={{flex:1}}>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={!this.props.news.showModal}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight onPress={() => {
                                this.props.newsActions.showOrHideNewsModal(true)}}
                            >
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </Modal>
                <View style={{flex:1}}>
                    <ScrollableTabView
                        style={{flex:1}}
                        initialPage={0}
                        renderTabBar={() => <MyScrollableTabBar showModal={
                            () => {this.props.newsActions.showOrHideNewsModal(false)}
                        }/>}
                        tabBarBackgroundColor={colors.MAIN_COLOR}
                        tabBarActiveTextColor={colors.MAIN_TEXT_COLOR}
                        tabBarInactiveTextColor={colors.MAIN_TEXT_COLOR}
                        tabBarUnderlineStyle={{backgroundColor:colors.MAIN_TEXT_COLOR}}
                    >

                        {this.props.news.tabs.map((tab,i)=>{
                            return(
                                <Text tabLabel={tab} key={i}>{tab}</Text>
                            );
                        })}
                    </ScrollableTabView>
                </View>
            </View>
        );
    }
}
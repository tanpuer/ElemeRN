/**
 * Created by eengoo on 17/3/14.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    StatusBar,
} from 'react-native';

import FacebookTabBar from '../component/FacebookTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {StackNavigator} from 'react-navigation';
import MyStatusBar from '../component/MyStatusBar';
import NewsContainer from '../containers/NewsContainer';
import FriendsContainer from '../containers/FriendsContainer';
import ChatContainer from '../containers/ChatContainer';
import MeContainer from '../containers/MeContainer';
import * as colors from '../constants/ColorTypes';
import LoginContainer from '../containers/LoginContainer';

export default class App extends Component{

    static navigationOptions = {

    };

    render() {
        return (
            // <View style={{flex:1}}>
            //     <MyStatusBar
            //         backgroundColor={colors.MAIN_COLOR}
            //         barStyle="light-content"
            //     />
            //     <ScrollableTabView
            //         initialPage={0}
            //         renderTabBar={() => <FacebookTabBar />}
            //         tabBarPosition={'bottom'}
            //         locked={true}
            //     >
            //         <NewsContainer
            //             tabLabel="ios-paper"
            //         />
            //         <FriendsContainer
            //             tabLabel="ios-people"
            //         />
            //         <ChatContainer
            //             tabLabel="ios-chatboxes"
            //         />
            //         <MeContainer
            //             tabLabel="ios-list"
            //         />
            //     </ScrollableTabView>
            // </View>
            <LoginContainer/>
        );
    }

}
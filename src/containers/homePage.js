/**
 * Created by cw on 2017/4/6.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

import FacebookTabBar from '../component/FacebookTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import MyStatusBar from '../component/MyStatusBar';
import NewsContainer from '../containers/NewsContainer';
import FriendsContainer from '../containers/FriendsContainer';
import ChatContainer from '../containers/ChatContainer';
import MeContainer from '../containers/MeContainer';
import * as colors from '../constants/ColorTypes';

export default class HomePage extends Component{

    render(){
        return(
            <View style={{flex:1}}>
                <MyStatusBar
                    backgroundColor={colors.MAIN_COLOR}
                    barStyle="light-content"
                />
                <ScrollableTabView
                    initialPage={0}
                    renderTabBar={() => <FacebookTabBar />}
                    tabBarPosition={'bottom'}
                    locked={true}
                >
                    <NewsContainer
                        tabLabel="ios-paper"
                    />
                    <FriendsContainer
                        tabLabel="ios-people"
                    />
                    <ChatContainer
                        tabLabel="ios-chatboxes"
                    />
                    <MeContainer
                        tabLabel="ios-list"
                    />
                </ScrollableTabView>
            </View>
        );
    }
}
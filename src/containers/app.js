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

export default class App extends Component{

    static navigationOptions = {

    };

    render() {
        return (
            <View style={{flex:1}}>
                <MyStatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <ScrollableTabView
                    style={{marginTop: 20, }}
                    initialPage={1}
                    renderTabBar={() => <FacebookTabBar />}
                    tabBarPosition={'bottom'}
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

const styles = StyleSheet.create({
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
});

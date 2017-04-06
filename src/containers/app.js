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
    Navigator,
} from 'react-native';

import FacebookTabBar from '../component/FacebookTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import MyStatusBar from '../component/MyStatusBar';
import NewsContainer from '../containers/NewsContainer';
import FriendsContainer from '../containers/FriendsContainer';
import ChatContainer from '../containers/ChatContainer';
import MeContainer from '../containers/MeContainer';
import * as colors from '../constants/ColorTypes';
import LoginContainer from '../containers/LoginContainer';

export default class App extends Component{


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

            //目前暂时用rn提供的Navigator，React-Navigation bug太多，不敢用。。。
            <Navigator
                initialRoute={{ name: 'LoginContainer', component: LoginContainer }}

                //可选,配置页面切换动画和手势
                configureScene={(route,routeStack) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft;
                }}

                //必选,渲染每一个路由指定的页面
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    //传值要加{...route.passProps},不然页面跳转传值失败
                    return <Component {...route.passProps} route={route} navigator={navigator} />
                }}/>
        );
    }

}
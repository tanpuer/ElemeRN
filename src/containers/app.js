/**
 * Created by eengoo on 17/3/14.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';


import LoginContainer from '../containers/LoginContainer';
import HomePage from '../containers/homePage';

export default class App extends Component{


    render() {
        return (
            //目前暂时用rn提供的Navigator，React-Navigation bug太多，不敢用。。。
            <Navigator
                initialRoute={{ name: 'HomePageContainer', component: HomePage}}
                //initialRoute={{ name: 'LoginContainer', component: LoginContainer}}

                //可选,配置页面切换动画和手势
                configureScene={(route,routeStack) => {
                    //暂时把手势禁掉
                    //等待react-navigation稳定了就换。。。
                    return Object.assign({},Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft,{gestures:{}});
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
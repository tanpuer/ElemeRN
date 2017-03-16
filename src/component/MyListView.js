/**
 * Created by eengoo on 17/3/16.
 */
import React, {Component} from 'react';
import {
    ListView,
    RefreshControl,
    Text,
    StyleSheet,
    View,
} from 'react-native';
import * as colors from '../constants/ColorTypes';

export default class MyListView extends Component{

    constructor(props){
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2)=> row1 !== row2,
            }),
            data: this.mockData(),
            refresh:false,
            isLoadingMore:true,
        };
        this.renderRow = this.renderRow.bind(this);
        this.onEndReached = this.onEndReached.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
    }

    renderRow(rowData){
        if (rowData === "loadMore"){
            return(
                <View style={styles.loadMoreContainer}>
                    <Text style={{height:40}}>{"正在加载更多。。。"}</Text>
                </View>
            )
        }else {
            return(
                <Text style={{height:70}}>{rowData}</Text>
            )
        }
    }

    mockData(){
        const {title} = this.props;
        let arr = [];
        for (let i=0; i<10;i++){
            let randomNum = Math.floor(Math.random()*100);
            arr.push(title + randomNum);
        }
        return arr;
    }

    onEndReached(){
        if (this.state.isLoadingMore){
            this.setState({
                data: this.state.data.concat("loadMore"),
                isLoadingMore:false
            });
            setTimeout(()=>{
                let arr = this.mockData();
                this.state.data.pop();
                this.setState({
                    data: this.state.data.concat(arr),
                    isLoadingMore:true,
                });
            },2000)
        }
    }

    onRefresh(){
        this.setState({
            refresh:true
        });
        setTimeout(()=>{
            let arr = this.mockData();
            this.setState({
                data: arr.concat(this.state.data),
                refresh:false,
            });
        },2000);
    }

    render(){
        return(
            <ListView
                renderRow = {this.renderRow}
                dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
                onEndReached={this.onEndReached}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refresh}
                        onRefresh={this.onRefresh}
                        title={"...正在加载"}
                        titleColor={colors.REFRESH_COLOR}
                        tintColor={colors.REFRESH_COLOR}
                        colors={[colors.REFRESH_COLOR]}
                    />
                }
                onEndReachedThreshold={100}//如果是0 android会有问题。
                >
            </ListView>
        );
    }
}

const styles = StyleSheet.create({
    loadMoreContainer:{
        height:40,
        justifyContent:'center',
        alignItems:'center',
    }
});
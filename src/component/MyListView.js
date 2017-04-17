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
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import * as colors from '../constants/ColorTypes';
import LoadMoreView from '../component/LoadMoreView';
import ImageButton from '../component/ImageButton';
import * as callApis from '../api/fetchNewsData';

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
                <LoadMoreView/>
            )
        }else {
            return(
                <Text style={{height:70}}>{rowData}</Text>
            )
        }
    }

    componentWillMount(){
        const api = this.props.title.api;
        this.fetchData(api);
    }

    fetchData(api, num=10){
        callApis.getNews(api,num).then((res)=>console.log("111111", res));
    }

    mockData(){
        const {title} = this.props;
        let arr = [];
        for (let i=0; i<10;i++){
            let randomNum = Math.floor(Math.random()*100);
            arr.push(title.name + randomNum);
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
            },4000)
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

    onScroll(e){
        console.log("onScroll", e.nativeEvent.contentOffset.y);
    }

    scrollToTop(){
        this.refs.listView.scrollTo({x:0, y:0});
    }

    render(){
        return(
            <View>
                <ListView
                    ref="listView"
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
                    onEndReachedThreshold={200}//如果是0 android会有问题。
                    onScroll={(e)=>this.onScroll(e)}
                >
                </ListView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageButtonContainer:{
        position:'absolute',
        right:20,
        bottom:20,
        shadowOffset:{width:0, height:0.5},
        shadowOpacity:0.5,
        elevation:4,
        shadowColor:'black',
        // opacity:0.2
    },
    imageButton:{
        width:40,
        height:40,
    },
});
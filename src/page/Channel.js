/**
 * Created by eengoo on 17/3/15.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ListView,
    Dimensions,
    Platform
} from 'react-native';
import _ from 'lodash';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


export default class Channel extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedTabs: new ListView.DataSource({
                rowHasChanged: (row1,row2) => row1 !== row2,
            }),
            unSelectedTabs: new ListView.DataSource({
                rowHasChanged: (row1,row2) => row1 !== row2,
            }),
        };
        this.renderRow = this.renderRow.bind(this);
        this.renderUnSelectedRow = this.renderUnSelectedRow.bind(this);
    }

    renderRow(rowData){
        if (rowData.name == "微信精选"){
            return(
                <View style={styles.item}>
                    <Text style={[styles.text,{color:'#FFFFFF'}]}>{rowData.name}</Text>
                </View>
            )
        }else {
            return(
                <TouchableOpacity style={styles.item} onPress={()=>{this.props.newsActions.handleChannels(_.filter(this.props.news.tabs,function(item) {
                    return item != rowData;
                }), this.props.news.otherTabs.concat([rowData]))}}>
                    <Text style={styles.text}>{rowData.name}</Text>
                </TouchableOpacity>
            );
        }
    }

    renderUnSelectedRow(rowData){
        return(
            <TouchableOpacity style={styles.item} onPress={()=>{this.props.newsActions.handleChannels(this.props.news.tabs.concat([rowData]), _.filter(this.props.news.otherTabs, function(item) {
                return item != rowData;
            }))}}>
                <Text style={styles.text}>{rowData.name}</Text>
            </TouchableOpacity>
        );
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.title_text}>切换栏目</Text>
                    <TouchableOpacity onPress={this.props.hideModal}>
                        <Image
                            style={styles.title_image}
                            source={require('../img/arrow.png')}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.sectionTitle}>我的关注，点击取消</Text>

                <ListView
                    contentContainerStyle={styles.selectedList}
                    dataSource={this.state.selectedTabs.cloneWithRows(this.props.news.tabs)}
                    renderRow={this.renderRow}
                    scrollEnabled={false}
                    initialListSize={this.props.news.tabs.length}
                    enableEmptySections={true}
                />

                <Text style={styles.sectionTitle}>更多频道，点击关注</Text>

                <ListView
                    contentContainerStyle={styles.unSelectedList}
                    dataSource={this.state.unSelectedTabs.cloneWithRows(this.props.news.otherTabs)}
                    renderRow={this.renderUnSelectedRow}
                    scrollEnabled={false}
                    initialListSize={this.props.news.otherTabs.length}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        ...Platform.select({
            ios:{marginTop:20,height:SCREEN_HEIGHT-20-50},
            android:{height:SCREEN_HEIGHT-20-50},
        }),
    },
    title:{
        height:30,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    title_text:{
        marginLeft:20,
    },
    title_image:{
        width:20,
        height:20,
        marginRight:20,
    },
    selectedList:{
        flexWrap:'wrap',
        flexDirection:'row',
    },
    unSelectedList:{
        flexWrap:'wrap',
        flexDirection:'row',
    },
    item:{
        width:(SCREEN_WIDTH-100)/4,
        height:30,
        backgroundColor:'gray',
        marginLeft:20,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
    },
    text:{
        textAlign:'center',
        fontSize:12,
    },
    sectionTitle:{
        fontSize:16,
        margin:20,
    }
});
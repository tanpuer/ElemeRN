/**
 * Created by cw on 2017/4/18.
 */
import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const LIST_ITEM_HEIGHT = 60;

class MyFlatList extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: this.mockData(),
        };

    }

    mockData(){
        var arr = this.props.friends.data;
        if (arr && arr.length){
            return;
        }else {
            const {title} = this.props.friends;
            for (let i=0; i<10; i++){
                let randomNum = Math.floor(Math.random() *100);
                arr.push(title + randomNum);
            }
            this.props.friendActions.saveData(arr);
        }
    }

    renderItem = ({item})=>{
        return(
            <Text style={styles.item} key={item}>
                {item}
            </Text>
        )
    };

    keyExtractor = ({item})=>{
        return item;
    };

    itemSeparatorComponent = ()=>{
        return(
            <View
                style={styles.separator}
            >
            </View>
        );
    };

    onEndReached = ()=>{
        this.props.friendsActions.loadMore(this.props.friends.title);
    };

    render(){
        const {data} = this.props.friends.data;
        return(
            <FlatList
                data={data}
                debug={false}
                renderItem= {this.renderItem}
                getItemLayout={(data,index)=>(
                    {length:LIST_ITEM_HEIGHT, offset:LIST_ITEM_HEIGHT * index, index}
                )}
                keyExtractor={this.keyExtractor}
                ItemSeparatorComponent={this.itemSeparatorComponent}
                onEndReached={this.onEndReached}
            />
        );
    }

    //FlatList相比于ListView性能更好是因为列表的不可见部分替换成空白元素，这样就需要提前知道实际展现元素的高度和相对位置。
    //如果不知道就先渲染出实际元素，再用相同高度的空白元素去替代，onCellLayout就是用于动态计算元素高度的方法，如果事先知道
    //元素的高度，就可以用getItemLayout优化，跳过onCellLayout这一步。

}

const styles = StyleSheet.create({
    item:{
        height:LIST_ITEM_HEIGHT,
        textAlign:'center',
        fontSize:20,
    },
    separator:{
        height:10,
        backgroundColor:'gray',
    }
});

export default MyFlatList;
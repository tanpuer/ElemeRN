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

export default class News extends Component{

    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
        };
        this.showOrHideModal = this.showOrHideModal.bind(this);
    }

    showOrHideModal(show){
        this.setState({
            modalVisible:show,
        });
    }

    render() {
        return(
            <View>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight onPress={()=>this.showOrHideModal(false)}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>

                        </View>
                    </View>

                </Modal>
                <ScrollableTabView
                    style={{}}
                    initialPage={0}
                    renderTabBar={() => <MyScrollableTabBar showModal={()=>this.showOrHideModal(true)}/>}
                >
                    <Text tabLabel='Tab #1'>My</Text>
                    <Text tabLabel='Tab #2'>favorite</Text>
                    <Text tabLabel='Tab #3'>project</Text>
                    <Text tabLabel='Tab #4'>favorite</Text>
                    <Text tabLabel='Tab #5'>project</Text>
                </ScrollableTabView>
            </View>
        );
    }
    // render() {
    //     return (
    //         <View style={{marginTop: 22}}>
    //             <Modal
    //                 animationType={"slide"}
    //                 transparent={false}
    //                 visible={this.state.modalVisible}
    //                 onRequestClose={() => {alert("Modal has been closed.")}}
    //             >
    //                 <View style={{marginTop: 22}}>
    //                     <View>
    //                         <Text>Hello World!</Text>
    //
    //                         <TouchableHighlight onPress={() => {
    //           this.setModalVisible(!this.state.modalVisible)
    //         }}>
    //                             <Text>Hide Modal</Text>
    //                         </TouchableHighlight>
    //
    //                     </View>
    //                 </View>
    //             </Modal>
    //
    //             <TouchableHighlight onPress={() => {
    //       this.setModalVisible(true)
    //     }}>
    //                 <Text>Show Modal</Text>
    //             </TouchableHighlight>
    //
    //         </View>
    //     );
    // }
}
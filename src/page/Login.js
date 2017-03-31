/**
 * Created by cw on 2017/3/30.
 */
import React,{Component} from 'react';
import {
    View,
    Animated,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard,
    StyleSheet,
    Dimensions,
    Text,
    Button,
} from 'react-native';
import * as colors from '../constants/ColorTypes';

const WIDTH = Dimensions.get('window').width;

class Login extends Component{

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.imageHeight = new Animated.Value(100);
    }

    componentWillMount() {
        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideListener = Keyboard.addListener("keyboardWillHide", this.keyboardWillHide);
    }

    keyboardWillShow = (event)=>{
        Animated.timing(this.imageHeight,{
            toValue:50,
            duration:event.duration,
        }).start();
    };

    keyboardWillHide = (event)=>{
        Animated.timing(this.imageHeight, {
            toValue:100,
            duration:event.duration,
        }).start();
    };

    componentWillUnMount() {
        this.keyboardWillHideListener.remove();
        this.keyboardWillShowListener.remove();
    }

    login(){

    }

    render(){
        return(
            <Animated.View style={styles.container}>
                <Animated.Image
                    source={require('../img/react_logo.png')}
                    style={{height:this.imageHeight, width:this.imageHeight}}
                />
                <TextInput
                    style={styles.input}
                    placeholder={"id"}
                />
                <TextInput
                    style={styles.input}
                    placeholder={"password"}
                />
                <Button
                    title="登陆"
                    onPress={()=>{this.login()}}
                />
                <View>
                    <Text>
                        {"忘记密码"}
                    </Text>
                    <Text>
                        {"其他帐号登陆"}
                    </Text>
                </View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       alignItems:'center',
        backgroundColor:colors.MAIN_COLOR,
    },
    input:{
        width:WIDTH-40,
        marginLeft:20,
        marginRight:20,
        height:50,
        marginTop:20,
        backgroundColor:'white'
    },
    registryAnd

});

export default Login;
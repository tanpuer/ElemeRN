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
    Platform,
    Modal,
} from 'react-native';
import * as colors from '../constants/ColorTypes';
import MyStatusBar from '../component/MyStatusBar';

const WIDTH = Dimensions.get('window').width;
const NOT_LODING = -1;
const IS_LOADING = 0;
const LOADING_SUCCESS = 1;
const LOADING_FAILED = 2;

class Login extends Component{

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            id:null,
            password:null,
        };
        this.imageHeight = new Animated.Value(100);
    }

    componentWillMount() {
        //ios 可以监听到KeyboardWillShow，但android只能监听到KeyboardDidShow
        if (Platform.OS === 'ios'){
            this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
            this.keyboardWillHideListener = Keyboard.addListener("keyboardWillHide", this.keyboardWillHide);
        }else {
            this.keyboardWillShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
            this.keyboardWillHideListener = Keyboard.addListener("keyboardDidHide", this.keyboardDidHide);
        }
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

    keyboardDidShow = ()=>{
        Animated.timing(this.imageHeight, {
            toValue:50,
            duration:200,
        }).start();
    };

    keyboardDidHide = ()=> {
        Animated.timing(this.imageHeight, {
            toValue:100,
            duration:200,
        }).start();
    };

    componentWillUnMount() {
        this.keyboardWillHideListener.remove();
        this.keyboardWillShowListener.remove();
    }

    login(id,password){
        this.props.loginActions.login(id,password);
    }

    render(){
        const login_status = this.props.login.login_status;
        console.log("login_status", login_status);

        return(
            <Animated.View style={styles.container}>
                <MyStatusBar/>
                <Animated.Image
                    source={require('../img/react_logo.png')}
                    style={{height:this.imageHeight, width:this.imageHeight}}
                />
                <TextInput
                    ref="input_id"
                    style={styles.input}
                    placeholder={"id"}
                    onChangeText={(text)=>this.setState({id:text})}
                    underlineColorAndroid={colors.MAIN_COLOR}
                    onEndEditing={()=>{setTimeout(()=>this.refs.input_password.focus(),200)}}
                />
                <TextInput
                    ref="input_password"
                    style={styles.input}
                    placeholder={"password"}
                    onChangeText={(text)=>this.setState({password:text})}
                    underlineColorAndroid={colors.MAIN_COLOR}
                />
                <Button
                    title="登陆"
                    onPress={()=>{this.login(this.state.id,this.state.password)}}
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
        );
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

});

export default Login;
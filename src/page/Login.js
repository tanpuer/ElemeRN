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
    ActivityIndicator,
    Modal,
} from 'react-native';
import * as colors from '../constants/ColorTypes';
import MyStatusBar from '../component/MyStatusBar';
import HomePage from '../containers/homePage';
import toast from '../utils/toast';

const WIDTH = Dimensions.get('window').width;
const NOT_LOGIN = -1;
const IS_LOGIN = 0;
const LOGIN_SUCCESS = 1;
const LOGIN_FAILED = 2;

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

    componentWillReceiveProps(nextProps) {
        const login_status = nextProps.login.login_status;
        if (login_status === LOGIN_SUCCESS){
            this.props.navigator.replace({
                component: HomePage,
            });
        }else if (login_status == LOGIN_FAILED){
            //toast
            toast("登陆失败");
        }
    }

    render(){
        const login_status = this.props.login.login_status;
        console.log("login_status", login_status);
        return(
            <View style={{flex:1,}}>
                <Modal
                    animationType={"fade"}
                    transparent={true}
                    visible={login_status===IS_LOGIN}
                    onRequestClose={() => {}}
                >
                    <ActivityIndicator
                        style={styles.activityIndicator}
                        size='large'
                    />
                </Modal>
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
                    <View style={styles.loginButton}>
                        <Button
                            title="登陆"
                            style={styles.loginButton}
                            onPress={()=>{this.login(this.state.id,this.state.password)}}
                        />
                    </View>
                    <View style={styles.otherButton}>
                        <Button
                            title= "忘记密码"
                            onPress={()=>{}}
                        />
                        <Button
                            title="注册"
                            onPress={()=>{}}
                        />
                    </View>
                </Animated.View>
            </View>
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
    loginButton:{
        width:WIDTH-40,
        marginTop:20,
    },
    otherButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:WIDTH-40,
        marginTop:20,
    },
    activityIndicator:{
        alignItems:'center',
        flex:1,
        justifyContent:'center',
        padding:8,
    }
});

export default Login;
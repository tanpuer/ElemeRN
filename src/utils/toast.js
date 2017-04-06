/**
 * Created by cw on 2017/4/6.
 */
import {
    ToastAndroid,
    Platform,
} from 'react-native';

//ios需要找个替代的
export default function toast(msg, duration=ToastAndroid.LONG) {
    if (Platform.OS === 'android'){
        ToastAndroid.show(msg,duration);
    }
}
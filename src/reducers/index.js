/**
 * Created by eengoo on 17/3/14.
 */
import {combineReducers} from 'redux';
import news from './news';
import login from './login';
import friends from './friends';

const rootReducer = combineReducers({
    news,
    login,
    friends,
});

export default rootReducer;
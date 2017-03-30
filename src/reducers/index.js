/**
 * Created by eengoo on 17/3/14.
 */
import {combineReducers} from 'redux';
import news from './news';
import login from './login';

const rootReducer = combineReducers({
    news,
    login,
});

export default rootReducer;
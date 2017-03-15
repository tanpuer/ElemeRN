/**
 * Created by eengoo on 17/3/14.
 */
import {combineReducers} from 'redux';
import news from './news';

const rootReducer = combineReducers({
    news,
});

export default rootReducer;
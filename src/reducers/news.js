/**
 * Created by eengoo on 17/3/15.
 */
import * as types from '../constants/ActionTypes';
const initialState = {
    showModal: true,
    tabs: [{name:"推荐", api:'wxnew', detail:''}],
    otherTabs: [
        {name:"电视剧", api:'social', detail:''},
        {name:"电影", api:'guonei', detail:''},
        {name:"资讯", api:'world', detail:''},
        {name:"娱乐", api:'huabian', detail:''},
        {name:"other", api:'tiyu', detail:''},
        {name:"other", api:'nba', detail:''},
        {name:"other", api:'football', detail:''},
        {name:"other", api:'keji', detail:''},
        {name:"other", api:'startup', detail:''},
        {name:"other", api:'apple', detail:''},
        {name:"other", api:'mobile', detail:''},
        {name:"other", api:'travel', detail:''},
        {name:"other", api:'health', detail:''},
        {name:"other", api:'qiwen', detail:''},
        {name:"other", api:'meinv', detail:''},
        {name:"other", api:'vr', detail:''},
        {name:"other", api:'it', detail:''},
    ],
};

export default function news(state = initialState, action) {

    switch (action.type){
        case types.SHOW_OR_HIDE_NEWS_MODAL:
            return Object.assign({},state, {showModal: action.showModal});
            break;
        case types.HANDLE_CHANNEL:{
            return Object.assign({},state, action);
            break;
        }
        default:
            return state;
    }
}
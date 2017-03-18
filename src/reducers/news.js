/**
 * Created by eengoo on 17/3/15.
 */
import * as types from '../constants/ActionTypes';
const initialState = {
    showModal: true,
    tabs: [{name:"微信精选", api:'wxnew', detail:''}],
    otherTabs: [
        {name:"社会新闻", api:'social', detail:''},
        {name:"国内新闻", api:'guonei', detail:''},
        {name:"国际新闻", api:'world', detail:''},
        {name:"娱乐新闻", api:'huabian', detail:''},
        {name:"体育新闻", api:'tiyu', detail:''},
        {name:"NBA新闻", api:'nba', detail:''},
        {name:"足球新闻", api:'football', detail:''},
        {name:"科技新闻", api:'keji', detail:''},
        {name:"创业新闻", api:'startup', detail:''},
        {name:"苹果新闻", api:'apple', detail:''},
        {name:"移动互联", api:'mobile', detail:''},
        {name:"旅游资讯", api:'travel', detail:''},
        {name:"健康知识", api:'health', detail:''},
        {name:"奇闻异事", api:'qiwen', detail:''},
        {name:"美女图片", api:'meinv', detail:''},
        {name:"VR科技", api:'vr', detail:''},
        {name:"IT资讯", api:'it', detail:''},
    ],
};

export default function news(state = initialState, action) {

    switch (action.type){
        case types.SHOW_OR_HIDE_NEWS_MODAL:
            return Object.assign({},state, {showModal: action.showModal});
        case types.HANDLE_CHANNEL:{
            return Object.assign({},state, action);
        }
        default:
            return state;
    }
}
/**
 * Created by eengoo on 17/3/15.
 */
import * as types from '../constants/ActionTypes';
const initialState = {
    showModal: true,
    tabs: ["头条", "科技", "财经", "军事", "体育"],
    otherTabs: ["房产", "足球", "娱乐", "电影", "汽车", "笑话", "游戏", "时尚", "情感", "精选", "电台", "NBA", "数码", "移动", "彩票", "教育", "论坛", "旅游", "手机", "博客", "社会", "家居", "暴雪", "亲子", "CBA", "消息"],
}

export default function news(state = initialState, action) {

    switch (action.type){
        case types.SHOW_OR_HIDE_NEWS_MODAL:
            return Object.assign({},initialState, {showModal: action.showModal});
        default:
            return state;
    }
}
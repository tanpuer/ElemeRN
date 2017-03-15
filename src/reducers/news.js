/**
 * Created by eengoo on 17/3/15.
 */
import * as types from '../constants/ActionTypes';
const initialState = {
    showModal:false,
};

export default function news(state = initialState, action) {

    switch (action.type){
        case types.SHOW_OR_HIDE_NEWS_MODAL:
            return Object.assign({},initialState, {showModal: action.showModal});
        default:
            return state;
    }
}
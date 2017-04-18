/**
 * Created by cw on 2017/4/18.
 */

import * as types from '../constants/ActionTypes';
const initialState = {
    title: "friend",
    data: [],
};

export default function friends(state=initialState, action) {
    switch (action.type){
        case types.FRIENDS_DATA_CONCAT:{
            return Object.assign({}, state, action.data);
        }
        default:
            return state;
            break;
    }
};
/**
 * Created by cw on 2017/3/30.
 */
import * as types from '../constants/ActionTypes';
const initialState = {
    login_status:-1,
};

export default function login(state = initialState, action) {
    switch (action.type){
        case types.IS_LOGIN:{
            return Object.assign({}, state, {login_status:0});
        }
        case types.LOGIN_SUCCESS:{
            return Object.assign({}, state, {login_status:1});
        }
        case types.LOGIN_FAILED:{
            return Object.assign({}, state, {login_status:2});
        }
        case types.LOGIN_NULL:{
            return state;
        }
        default:
            return state;
            break;
    }
}
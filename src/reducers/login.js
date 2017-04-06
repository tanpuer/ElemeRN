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
            break;
        }
        case types.LOGIN_SUCCESS:{
            return Object.assign({}, state, {login_status:1});
            break;
        }
        case types.LOGIN_FAILED:{
            return Object.assign({}, state, {login_status:2});
            break;
        }
        default:
            return state;
            break;
    }
}
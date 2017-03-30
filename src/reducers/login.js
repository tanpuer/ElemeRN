/**
 * Created by cw on 2017/3/30.
 */
import * as types from '../constants/ActionTypes';
const initialState = {

};

export default function login(state = initialState, action) {
    switch (action.type){
        case types.LOGIN_NULL:{
            return Object.assign({}, state, {login:null});
            break;
        }
        case types.LOGIN_SUCCESS:{
            return Object.assign({}, state, {login:true});
            break;
        }
        case types.LOGIN_FAILED:{
            return Object.assign({}, state, {login:false});
            break;
        }
        default:
            return state;
            break;
    }
}
/**
 * Created by cw on 2017/3/30.
 */
import * as types from '../constants/ActionTypes';
import _ from 'lodash';

export function login(id, password) {
    return(dispatch,getState)=>{
        if (_.isNull(id) || _.isNull(password)){
            dispatch({
                types:types.LOGIN_NULL
            });
        }else if (id === "chenwei" && password === "123456"){
            dispatch({
                type:types.IS_LOGIN
            });
            //mock
            setTimeout(()=>{
                dispatch({
                    type:types.LOGIN_SUCCESS
                })
            },2000);
        }else {
            dispatch({
                type:types.IS_LOGIN
            });
            setTimeout(()=>{
                dispatch({
                    type:types.LOGIN_FAILED
                })
            },2000);
        }
    }
}